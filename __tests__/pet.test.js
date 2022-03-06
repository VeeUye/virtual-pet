const Pet = require("../src/pet");
const pet = new Pet("Fido");
const pet2 = new Pet("Bob");
const pet3 = new Pet("Karen");
const pet4 = new Pet("Petty");

describe("constructor", () => {
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
  it("increments age by 1, hunger by 5, decrements fitness by 3", () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
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
  it("thows an error if pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("decreases hunger level", () => {
    // const pet5 = new Pet("WorkPet");
    pet2.hunger = 3;
    pet2.feed();
    expect(pet2.feed).toBeInstanceOf(Function);
    expect(pet2.hunger).toBeGreaterThanOrEqual(0);
    expect(pet2.hunger).toEqual(0);
  });
});

describe("checkUp", () => {
  it("checks status of pet", () => {
    pet.fitness = 3;
    pet.hunger = 0;
    pet2.hunger = 5;
    pet3.fitness = 3;
    pet3.hunger = 5;
    pet4.hunger = 1;
    pet4.fitness = 9;
    console.log(pet.hunger);
    expect(pet.checkUp).toBeInstanceOf(Function);
    expect(pet.checkUp()).toBe("I need a walk");
    expect(pet2.checkUp()).toBe("I am hungry");
    expect(pet3.checkUp()).toBe("I am hungry AND I need a walk");
    expect(pet4.checkUp()).toBe("I feel great!");
  });
});

describe("isAlive", () => {
  it("check`s pet is alive or dead", () => {
    pet.fitness = 0;
    pet2.hunger = 10;
    pet3.age = 30;
    pet4.age = 4;
    pet4.hunger = 3;
    pet4.fitness = 10;

    expect(pet.isAlive).toEqual(false);
    expect(pet2.isAlive).toEqual(false);
    expect(pet3.isAlive).toEqual(false);
    expect(pet4.isAlive).toEqual(true);
  });
});
