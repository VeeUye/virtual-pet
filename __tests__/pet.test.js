const Pet = require("../src/pet");

describe("constructor", () => {
  const pet = new Pet("Fido");
  it("returns an object", () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
  it("renames pet", () => {
    expect(pet.name).toBe("Fido");
  });
  it("has an initial age of 0", () => {
    expect(pet.age).toBe(0);
  });
  it("has an initial hunger of 0", () => {
    expect(pet.hunger).toBe(0);
  });
  it("has an intial fitness of 10", () => {
    expect(pet.fitness).toBe(10);
  });
});

describe("growUp", () => {
  const pet = new Pet("Fido");
  it("thows an error if pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("increments age by 1, hunger by 5, decrements fitness by 3", () => {
    pet.age = 0;
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  const pet = new Pet("Fido");
  it("increases fitness level", () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.walk).toBeInstanceOf(Function);
    expect(pet.fitness).toBeLessThanOrEqual(10);
    expect(pet.fitness).toBeGreaterThanOrEqual(0);
    expect(pet.fitness).toEqual(8);
  });
  it("thows an error if pet is not alive", () => {
    pet.fitness = 0;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  const pet = new Pet("Fido");
  it("thows an error if pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("decreases hunger level", () => {
    const pet = new Pet("Fido");
    pet.hunger = 3;
    pet.feed();
    expect(pet.feed).toBeInstanceOf(Function);
    expect(pet.hunger).toBeGreaterThanOrEqual(0);
    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp", () => {
  const pet = new Pet("Fido");
  it("returns death string if pet is not alive", () => {
    pet.hunger = 10;
    expect(pet.checkUp()).toBe("Your pet is no longer alive :(");
  });
  it("checks status of pet", () => {
    pet.fitness = 3;
    pet.hunger = 0;
    expect(pet.checkUp).toBeInstanceOf(Function);
    expect(pet.checkUp()).toBe("I need a walk");

    pet.hunger = 5;
    pet.fitness = 10;
    expect(pet.checkUp()).toBe("I am hungry");

    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");

    pet.hunger = 1;
    pet.fitness = 9;
    expect(pet.checkUp()).toBe("I feel great!");
  });
});

describe("isAlive", () => {
  it("check`s pet is alive or dead", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);

    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);

    pet.age = 30;
    expect(pet.isAlive).toEqual(false);

    pet.age = 4;
    pet.hunger = 3;
    pet.fitness = 10;
    expect(pet.isAlive).toEqual(true);
  });
});
