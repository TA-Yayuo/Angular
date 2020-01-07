export class IncreaseNum {
  static readonly type = "INCREASE";
}
export class DegreaseNum {
  static readonly type = "DEGREASE";
  constructor(public payload: number) {}
}
export class IncrementCount {
  static readonly type = "[Home] Increment Count";
}

export class DecrementCount {
  static readonly type = "[Home] Decrement Count";
}
