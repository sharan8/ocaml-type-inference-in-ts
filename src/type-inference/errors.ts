enum ErrorType {
    INFERENCE,
}

export interface TypeError {
}

export class InferenceError implements TypeError {
    public type = ErrorType.INFERENCE
  
    constructor(public explanation: string) {}
    public explain() {
      return this.explanation
    }
  }