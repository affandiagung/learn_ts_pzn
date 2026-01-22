/** @format */

describe("IF Statement", () => {
  it("should support in typescript", function () {
    const examVallues = 90;

    if (examVallues >= 80) {
      console.log("Selamat Anda Lulus Memukau");
    } else if (examVallues >= 70) {
      console.log("Selamat Anda Lulus");
    } else {
      console.log("Maaf Anda Tidak Lulus");
    }
  });

  it("should support in tenary operator", function () {
    const value = 80;
    const say = value >= 75 ? "Lulus" : "Tidak Lulus";

    console.info("Hasilnya :", say);
  });

  it("should support in switch operator", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Affandi":
          return "Hello Affandi";
        case "Agung":
          return "Hello Agung";
        default:
          return "Hello Guest";
      }
    }
    console.log(sayHello("Affandi"));
  });
});
