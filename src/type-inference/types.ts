/* tslint:disable:max-classes-per-file */

export interface AstType {
}

export class TypeVariable implements AstType {
    constructor() { 
        this.instance = {}
        this._name = "unassigned"
        this.instantiated = false
    }
    toString() {
        return Object.keys(this.instance).length === 0 ? this.name : this.instance.toString()
    }

    instance: AstType
    _name: string
    instantiated: boolean
    get name() {
        if (this._name === "unassigned") {
            this._name = "t" + TypeVariable.lastNameIndex++
        }
        return this._name
    }

    static lastNameIndex = 0
}

export class TypeOperator implements AstType {
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
