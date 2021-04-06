/* tslint:disable:max-classes-per-file */

enum ErrorType {
    PARSE,
    INFERENCE,
    UNIFICATION,
}

export class AstError {
  constructor(public explanation: string) {}
  public explain() {
    return this.explanation
  }
  toString() {
    return this.explain()
  }
}

export class ParseError extends AstError {
  public errorType = ErrorType.PARSE
  toString() {
    return "Parse Error: " + super.toString()
  }
}
export class InferenceError extends AstError {
    public errorType = ErrorType.INFERENCE
    toString() {
      return "Inference Error: " + super.toString()
    }
  }

  export class UnificationError extends AstError {
    public errorType = ErrorType.UNIFICATION
    toString() {
      return "Unification Error: " + super.toString()
    }
  }