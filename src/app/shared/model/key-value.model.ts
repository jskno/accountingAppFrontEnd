export class KeyValue {
  public key: number;
  public value: string;
  public defaultValue: boolean;

  constructor(key: number, value: string, defaultValue: boolean) {
    this.key = key;
    this.value = value;
    this.defaultValue = defaultValue;
  }
}
