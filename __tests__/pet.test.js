const Pet = require("../src/pet");
const pet = new Pet("Fido");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
  it("renames pet", () => {
    expect(pet.name).toBe("Fido");
  });
});
