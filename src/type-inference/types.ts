/* tslint:disable:max-classes-per-file */
// @ts-check

import { Apply, AstNode, basicType, Id, Lambda, Let } from "./nodes"

export interface AstType {
}

class TypeVariable implements AstType {
    constructor() { 
        this.instance = {}
        this._name = "unassigned"
        this.instantiated = false
    }
    toString() {
        return this.instantiated ? this.instance.toString() : this.name
    }

    instance: AstType
    _name: string
    instantiated: boolean
    get name() {
        return this._name !== "unassigned" ? this._name : (this._name = 't' + (TypeVariable.lastNameIndex ++))
    }

    static lastNameIndex = 0
}

class TypeOperator implements AstType {
    constructor(public name: string, public types: AstType[ ]) { }
    toString() {
        if (this.types.length === 0)
            return this.name
        else if (this.types.length === 2)
            return `(${this.types[0]} ${this.name} ${this.types[1]})`
        else
            return `${this.name} ${this.types.join(' ')}`
    }
}

const IntegerType = new TypeOperator('int', [ ])
const BoolType = new TypeOperator('bool', [ ])
const FunctionType = (from: AstType, to: AstType) => new TypeOperator('->', [from, to])

class TypeEnv {
    constructor(public map: { [name: string]: AstType } = { }) {
    }
    get(name: any, nonGenerics: Set<AstType>) {
        if (name in this.map)
            return fresh(this.map[name], nonGenerics)
        throw 'undefined symbol: ' + name
    }
    extend(name: any, val: AstType) {
        return new TypeEnv(Object.assign({ }, this.map, { [name]:val }))
    }
}

export function analyse(node: AstNode, env: TypeEnv, nonGeneric: Set<AstType>): AstType {
    if (node instanceof Id) {
        if (node.type === basicType.reference) {
            return env.get(node.name, nonGeneric)
        } else {
            return env.get(node.type, nonGeneric)
        }
    }
    else if (node instanceof Apply) {
        let funcType = analyse(node.func, env, nonGeneric),
            argType = analyse(node.arg, env, nonGeneric),
            retType = new TypeVariable()
        unify(FunctionType(argType, retType), funcType)
        return retType
    }
    else if (node instanceof Lambda) {
        let argType = new TypeVariable(),
            newEnv = env.extend(node.args, argType),
            newGeneric = new Set(Array.from(nonGeneric).concat(argType)),
            retType = analyse(node.body, newEnv, newGeneric)
        return FunctionType(argType, retType)
    }
    else if (node instanceof Let) {
        let valType = analyse(node.value, env, nonGeneric),
            newEnv = env.extend(node.variable, valType)
        return analyse(node.body, newEnv, nonGeneric)
    }
    else {
        throw 'unhandled syntax node ' + node
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
            throw 'unexpected type to fresh'
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
                throw 'recurive unification'
            t1.instance = t2
        }
    }
    else if (t1 instanceof TypeOperator && t2 instanceof TypeVariable) {
        return unify(t2, t1)
    }
    else if (t1 instanceof TypeOperator && t2 instanceof TypeOperator) {
        if (t1.name !== t2.name || t1.types.length !== t2.types.length)
            throw 'type mismatch: ' + t1 + ' != ' + t2
        t1.types.forEach((t, i) => unify((t1 as TypeOperator).types[i], (t2 as TypeOperator).types[i]))
    }
    else {
        throw 'unexpected types to unify'
    }
}

function prune(type: AstType): AstType {
    if (type instanceof TypeVariable && type.instance)
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

// ...

const type1 = new TypeVariable(),
    type2 = new TypeVariable(),
    type3 = new TypeVariable()

const env = new TypeEnv({
    pair: FunctionType(type1, FunctionType(type2, new TypeOperator('*', [type1, type2]))),
    cond: FunctionType(BoolType, FunctionType(type3, FunctionType(type3, type3))),
    zero: FunctionType(IntegerType, BoolType),
    pred: FunctionType(IntegerType, IntegerType),
    times: FunctionType(IntegerType, FunctionType(IntegerType, IntegerType)),
    0: IntegerType,
    1: BoolType,
})

export function run(exp: AstNode) {
    console.log(exp.toString())
    return analyse(exp, env, new Set())
}
