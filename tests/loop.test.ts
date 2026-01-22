/** @format */

describe("Loop Statement", () => {
  it("should support for loop in typescript", function () {
    const names: string[] = ["Affandi", "Agung", "Jaya"];

    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }

    for (const name of names) {
      console.log(name);
    }

    for (const index in names) {
      console.log(names[index]);
    }
  });

  it("should support while loop in typescript", function () {
    let counter: number = 0;

    while (counter < 10) {
      console.log(counter);
      counter++;
    }
  });

  it("should support do while loop in typescript", function () {
    let counter: number = 0;

    do {
      console.log(counter);
      counter++;
    } while (counter < 10);
  });
});
