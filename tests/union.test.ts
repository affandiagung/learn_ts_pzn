/** @format */

describe("Union TYpe", function () {
  function process(value: number | string | boolean) {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (typeof value === "number") {
      return value + 2;
    } else {
      return !value;
    }
  }

  it("should same with javascript", function () {
    expect(process("Affandi")).toBe("AFFANDI");
    expect(process(12)).toBe(14);
    expect(process(true)).toBe(false);
  });
});
export {};
