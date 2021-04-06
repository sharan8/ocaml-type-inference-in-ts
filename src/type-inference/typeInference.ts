/* tslint:disable:max-classes-per-file */

import { InferenceError, UnificationError } from "./errors"
import { Apply, AstNode, basicType, BinaryOp, GlobalLet, Id, Lambda, Let, Letrec } from "./nodes"
import { AstType, TypeVariable, TypeOperator } from "./types"

class TypeEnv {
    constructor(public map: { [name: string]: AstType } = { }) {
    }
    get(name: any, nonGenerics: Set<AstType>) {
        if (name in this.map)
            return fresh(this.map[name], nonGenerics)
        throw new InferenceError('undefined symbol: ' + name)
    }
    extend(name: any, val: AstType) {
        return new TypeEnv(Object.assign({ }, this.map, { [name]:val }))
    }
}

export interface AstTypeEnvPair {
    type: AstType
    env: TypeEnv
}

export class TypeEnvPair implements AstTypeEnvPair {
    constructor(public type: AstType, public env: TypeEnv) {}
}

export function infer(node: AstNode, env: TypeEnv, nonGeneric: Set<AstType>): AstTypeEnvPair {
    if (node instanceof Id) {
        if (node.type === basicType.reference) {
            return new TypeEnvPair(env.get(node.name, nonGeneric), env)
        } else {
            return new TypeEnvPair(env.get(node.type, nonGeneric), env)
        }
    }
    else if (node instanceof Apply) {
        let c1 = infer(node.func, env, nonGeneric),
            funcType = c1.type,
            c2 = infer(node.arg, env, nonGeneric),
            argType = c2.type,
            retType = new TypeVariable()
        unify(FunctionType(argType, retType), funcType)
        return new TypeEnvPair(retType, env)
    }
    else if (node instanceof Lambda) {
        let argType = new TypeVariable(),
            newEnv = env.extend(node.args, argType),
            newGeneric = new Set(Array.from(nonGeneric).concat(argType)),
            context = infer(node.body, newEnv, newGeneric)
        return new TypeEnvPair(FunctionType(argType, context.type), context.env)
    }
    else if (node instanceof Let) {
        let newContext = infer(node.value, env, nonGeneric),
            newEnv = env.extend(node.variable, newContext.type),
            resultContext = infer(node.body, newEnv, nonGeneric)
        return new TypeEnvPair(resultContext.type, env)
    }
    else if (node instanceof GlobalLet) {
        let newContext = infer(node.value, env, nonGeneric),
            newEnv = env.extend(node.variable, newContext.type)
        return new TypeEnvPair(newContext.type, newEnv)
    }
    else if (node instanceof BinaryOp) {
        let operatorType = env.get(node.operator, nonGeneric),
            leftType = infer(node.left, env, nonGeneric),
            rightType = infer(node.right, env, nonGeneric),
            retType = new TypeVariable()
            unify(operatorType, FunctionType(leftType.type, FunctionType(rightType.type, retType)))
        return new TypeEnvPair(retType, env)
    }
    else if (node instanceof Letrec) {
        let newType = new TypeVariable(),
            newEnv = env.extend(node.variable, newType),
            newGeneric = new Set(Array.from(nonGeneric).concat(newType)),
            valType = infer(node.value, newEnv, newGeneric).type
            unify(newType, valType)
        return infer(node.body, newEnv, nonGeneric)
    }
    else {
        throw new InferenceError('unhandled syntax node ' + node)
    }
}

function fresh(type: AstType, nonGeneric: Set<AstType>): AstType {
    const mappings: WeakMap<AstType, AstType> = new WeakMap()

    function freshrec(type: AstType): AstType {
        type = prune(type)
        if (type instanceof TypeVariable) {
            if (isGeneric(type, nonGeneric)) {
                if (!mappings.has(type))
                    mappings.set(type, new TypeVariable())
                return mappings.get(type)!
            }
            else {
                return type
            }
        }
        else if (type instanceof TypeOperator) {
            return new TypeOperator(type.name, type.types.map(freshrec))
        }
        else {
            throw new InferenceError('unexpected type to fresh')
        }
    }

    return freshrec(type)
}

function unify(type1: AstType, type2: AstType): undefined {
    let t1 = prune(type1),
        t2 = prune(type2)
    if (t1 instanceof TypeVariable) {
        if (t1 !== t2) {
            if (occursInType(t1, t2))
                throw new UnificationError('Occurs Check')
            t1.instance = t2
        }
    }
    else if (t1 instanceof TypeOperator && t2 instanceof TypeVariable) {
        return unify(t2, t1)
    }
    else if (t1 instanceof TypeOperator && t2 instanceof TypeOperator) {
        if (t1.name !== t2.name || t1.types.length !== t2.types.length) {
            throw new UnificationError('Cannot unify: ' + t1 + ' != ' + t2)
        }
        t1.types.forEach((t, i) => unify((t1 as TypeOperator).types[i], (t2 as TypeOperator).types[i]))
    }
    else {
        throw new UnificationError('Failed to unify')
    }
}

function prune(type: AstType): AstType {
    if (type instanceof TypeVariable && Object.keys(type.instance).length > 0)
        return type.instance = prune(type.instance)
    return type
}

function isGeneric(type: TypeVariable, nonGenerics: Set<AstType>): boolean {
    return !occursInTypes(type, Array.from(nonGenerics))
}

function occursInType(type: TypeVariable, typeIn: AstType): boolean {
    typeIn = prune(typeIn)
    if (typeIn === type)
        return true
    else if (typeIn instanceof TypeOperator)
        return occursInTypes(type, typeIn.types)
    return false
}

function occursInTypes(type: TypeVariable, types: AstType[]): boolean {
    return types.some(t => occursInType(type, t))
}

const type1 = new TypeVariable(),
    type2 = new TypeVariable(),
    type3 = new TypeVariable()


const IntegerType = new TypeOperator('int', [ ])
const BoolType = new TypeOperator('bool', [ ])
const StringType = new TypeOperator('string', [ ])
const FunctionType = (from: AstType, to: AstType) => new TypeOperator('->', [from, to])

const GlobalEnv = new TypeEnv({
    pair: FunctionType(type1, FunctionType(type2, new TypeOperator('*', [type1, type2]))),
    cond: FunctionType(BoolType, FunctionType(type3, FunctionType(type3, type3))),
    zero: FunctionType(IntegerType, BoolType),
    pred: FunctionType(IntegerType, IntegerType),
    times: FunctionType(IntegerType, FunctionType(IntegerType, IntegerType)),
    "+": FunctionType(IntegerType, FunctionType(IntegerType, IntegerType)),
    0: IntegerType,
    1: BoolType,
    2: StringType,
})

let runningEnv = new TypeEnv({...GlobalEnv.map});

export function resetEnvironment() {
    runningEnv = new TypeEnv({...GlobalEnv.map});
}

export function inferOnce(exp: AstNode) {
    let resultContext = infer(exp, GlobalEnv, new Set())
    return resultContext.type
}

export function inferWithPersistentEnv(exp: AstNode) {
    let resultContext = infer(exp, runningEnv, new Set())
    runningEnv = resultContext.env
    return resultContext.type
}
