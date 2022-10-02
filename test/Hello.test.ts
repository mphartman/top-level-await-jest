import { Hello } from "../src/Hello.js";

describe("Hello", () => {
  it("should respond with given name", async () => {
    const hello = new Hello("Dewey");
    expect(hello.promiseToSayHello()).resolves.toBe("Hello, Dewey");
  });
});
