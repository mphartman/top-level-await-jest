export class Hello {
  constructor(private name: string) {}

  async promiseToSayHello(): Promise<string> {
    return `Hello${this.name.length > 0 ? ", " : ""}${this.name}`;
  }
}
