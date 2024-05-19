export class Float {
  constructor(private value = 0) {}
  public valueOf() {
    return this.value;
  }
  public toPrecision(precision?: number): number {
    this.value = parseFloat(this.value.toPrecision(precision));
    return this.value;
  }

  public toFixed(digits?: number): number {
    this.value = parseFloat(this.value.toFixed(digits));
    return this.value;
  }
}
