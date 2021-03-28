/* tslint:disable:max-classes-per-file */

enum ErrorType {
    PARSE,
    INFERENCE,
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

}
export class InferenceError extends AstError {
    public errorType = ErrorType.INFERENCE
  }