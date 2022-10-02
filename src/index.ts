import { Hello } from "./Hello.js";

export async function sayHello(): Promise<string> {
  return new Hello("").promiseToSayHello();
}

await sayHello();
