/* tslint:disable:max-classes-per-file */
export interface AstNode {
}

export enum basicType {
    integer_literal,
    bool_literal,
    string_literal,
    reference,
    default,
}
export class Id implements AstNode {
    constructor(public name: string, public type: basicType) { }
    toString() { return this.name }
}

export class Lambda implements AstNode {
    constructor(public args: Id[], public body: AstNode) { }
    toString() { return `(fn ${this.args} => ${this.body})` }
}

export class Apply implements AstNode {
    constructor(public func: AstNode, public arg: AstNode) { }
    toString() { return `(${this.func} ${this.arg})` }
}

export class Let implements AstNode {
    constructor(public variable: Id, public value: AstNode, public body: AstNode) { }
    toString() { return `(let ${this.variable} = ${this.value} in ${this.body})` }
}

export class Letrec implements AstNode {
    constructor(public variable: Id, public value: AstNode, public body: AstNode) { }
    toString() { return `(let rec ${this.variable} = ${this.value} in ${this.body})` }
}

export class GlobalLet implements AstNode {
    constructor(public variable: Id, public value: AstNode) { }
    toString() { return `(let ${this.variable} = ${this.value})` }
}
export class GlobalLetrec implements AstNode {
    constructor(public variable: Id, public value: AstNode) { }
    toString() { return `(let rec ${this.variable} = ${this.value})` }
}

export class BinaryOp implements AstNode {
    constructor(public operator: string, public left: AstNode, public right: AstNode) { }
    toString() { return `(${this.left} ${this.operator} ${this.right})` }
}

export class Sequence implements AstNode {
    constructor(public sequence: AstNode[]) { }
    toString() { return `(sequence: ${this.sequence})`}
}

export class Conditional implements AstNode {
    constructor(public condition: AstNode, public consequent: AstNode, public alternative: AstNode) { }
    toString() { return `(if ${this.condition} then ${this.consequent} else ${this.alternative})` }
}

export class While implements AstNode {
    constructor(public condition: AstNode, public body: AstNode) { }
    toString() { return `(while ${this.condition} do ${this.body} done)` }
}

export class For implements AstNode {
    constructor(public name: Id, public binding: AstNode, public end: AstNode, public body: AstNode) { }
    toString() { return `(for ${this.name} = ${this.binding} to ${this.end} do ${this.body})` }
}
