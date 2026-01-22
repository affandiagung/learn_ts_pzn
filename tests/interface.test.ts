/** @format */

import type { Employee, Manager } from "../src/employee";
import type { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in Interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Affandi",
      nib: "123",
      npwp: "123",
    };
    seller.id = 3;
    console.info("====Before changes====\n", seller);
    seller.name = "Agung";
    console.log("====After changes====\n", seller);
  });

  it("should support in Function interface", () => {
    interface AddFunction {
      (a: number, b: number): number;
    }
    const add: AddFunction = (a, b) => a ** b;
    console.log(add(32, 2));
  });

  it("should support in Indexacable interface", () => {
    interface StringArray {
      [index: number]: string;
    }
    const names: StringArray = ["Affandi", "Agung"];
    console.log(names);

    interface StringDictionary {
      [key: string]: string;
    }
    const dictionary: StringDictionary = {
      name: "Affandi",
      address: "Home",
    };
    console.log(dictionary);
  });

  it("should support in Extends interface", () => {
    const employee: Employee = {
      id: 1,
      name: "Affandi",
      divsion: "IT",
    };

    const manager: Manager = {
      id: 2,
      name: "Affandi",
      divsion: "IT",
      numberOfSubordinates: 10,
    };

    console.log(employee, manager);
  });

  it("should support Function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person1: Person = {
      name: "Affandi",
      sayHello(name: string) {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.log(person1.sayHello("Jaka"));
  });

  it("should support in Intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    type Domain = HasId & HasName;
    const domain: Domain = {
      id: 1,
      name: "Affandi",
    };
    console.log(domain);
  });
});
