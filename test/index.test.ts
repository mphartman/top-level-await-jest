import { sayHello } from "../src/index.js";

describe("index", () => {
  it("should say Hello", async () => {
    expect(sayHello()).resolves.toBe("Hello");
  });
});
