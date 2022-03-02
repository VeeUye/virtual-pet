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

  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toBe(0);
  });

  it("has an intial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toBe(10);
  });

  it("increments age by 1, hunger by 5, decrements fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });

  xit("increases fitness level", () => {
    const pet = new Pet("Fido");
    pet.walk();
    expect(pet.walk).toBeInstanceOf(Function);
    expect(pet.fitness).toBeLessThanOrEqual(10);
  });
});
