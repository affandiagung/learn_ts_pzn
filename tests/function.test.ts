/** @format */

describe("Function", () => {
  it("should say hello Affandi", function () {
    function sayHello(name: string): string {
      return `Hello ${name}, my name is ${name}`;
    }
    expect(sayHello("Affandi")).toBe("Hello Affandi, my name is Affandi");
  });

  it("should print hello Affandi", function () {
    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }
    // printHello("Affandi");
  });

  it("should support default parameter", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
  });

  it("should say support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (let value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should say support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
    }

    expect(sayHello("Affandi")).toBe("Hello Affandi");
    expect(sayHello("Affandi", "Agung")).toBe("Hello Affandi Agung");
  });

  it("should  support Function Overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value + 2;
      }
      if (typeof value === "string") {
        return value.toUpperCase();
      }
    }

    expect(callMe(12)).toBe(14);
    expect(callMe("Affandi")).toBe("AFFANDI");
  });

  it("should  support Function as Parameter", function () {
    // Declaring Function as parameter first
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Affandi", toUpper)).toBe("Hello AFFANDI");

    // anonymouse Function
    expect(
      sayHello("Agung", function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe("Hello AGUNG");

    // anonymouse Function with ES6
    expect(
      sayHello("Agung", (name: string): string => name.toUpperCase()),
    ).toBe("Hello AGUNG");
  });
});
