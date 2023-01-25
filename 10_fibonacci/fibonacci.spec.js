const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  test("1st fibonacci number is 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("6th fibonacci number is 8", () => {
    expect(fibonacci(6)).toBe(8);
  });
  test("10th fibonacci number is 55", () => {
    expect(fibonacci(10)).toBe(55);
  });
  test("15th fibonacci number is 610", () => {
    expect(fibonacci(15)).toBe(610);
  });
  test("25th fibonacci number is 75025", () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test("doesn't accept negatives", () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test("DOES accept strings", () => {
    expect(fibonacci("1")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacci("2")).toBe(1);
  });
  test("DOES accept strings", () => {
    expect(fibonacci("8")).toBe(21);
  });
});
