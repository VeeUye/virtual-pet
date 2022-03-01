const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
  it("renames pet", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toBe("Fido");
  });
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toBe(0);
  });
  it("increments age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});
