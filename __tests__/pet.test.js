const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
  it("renames pet", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toBe("Fido");
  });
});
