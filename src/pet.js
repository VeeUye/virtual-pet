const initialAge = 0;
const deathAge = 30;

const initialHunger = 0;
const deathHunger = 10;

const initialFitness = 10;
const deathFitness = 0;

const getFitBy = 4;
const loseFitnessBy = 3;
const getHungryBy = 5;
const decreaseHungerBy = 3;
const getOlderBy = 1;

class Pet {
  constructor(petName) {
    this.name = petName;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
  }
  get isAlive() {
    return (
      this.fitness > deathFitness &&
      this.hunger < deathHunger &&
      this.age < deathAge
    );
  }

  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.age += getOlderBy;
    this.hunger += getHungryBy;
    this.fitness < loseFitnessBy
      ? (this.fitness = deathFitness)
      : (this.fitness -= loseFitnessBy);
  }

  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.hunger -= decreaseHungerBy;
  }

  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.fitness <= initialFitness - getFitBy
      ? (this.fitness += getFitBy)
      : (this.fitness = initialFitness);
  }

  checkUp() {
    if (!this.isAlive) {
      return "Your pet is no longer alive :(";
    }
    if (this.fitness <= loseFitnessBy && this.hunger >= decreaseHungerBy) {
      return "I am hungry AND I need a walk";
    }
    if (this.fitness <= loseFitnessBy) {
      return "I need a walk";
    }
    if (this.hunger >= decreaseHungerBy) {
      return "I am hungry";
    }
    return "I feel great!";
  }
}

module.exports = Pet;
