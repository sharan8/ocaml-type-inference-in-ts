/* tslint:disable:max-classes-per-file */
export interface AstNode {
}

export class Id implements AstNode {
    constructor(public name: string) { }
    toString() { return this.name }
}

export class Lambda implements AstNode {
    constructor(public arg: Id, public body: AstNode) { }
    toString() { return `(fn ${this.arg} => ${this.body})` }
}

export class Apply implements AstNode {
    constructor(public func: AstNode, public arg: AstNode) { }
    toString() { return `(${this.func} ${this.arg})` }
}

export class Let implements AstNode {
    constructor(public variable: Id, public value: AstNode, public body: AstNode) { }
    toString() { return `(let ${this.variable} = ${this.value} in ${this.body})` }
}

export class BinaryOp implements AstNode {
    constructor(public operator: string, public left: AstNode, public right: AstNode) { }
    toString() { return `(${this.left} ${this.operator} ${this.right})` }
}

export class Sequence implements AstNode {
    constructor(public sequence: AstNode[]) { }
    toString() { return `(sequence: ${this.sequence})`}
}
