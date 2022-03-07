const initialAge = 0;
const deathAge = 30;
const intialHunger = 0;
const deathHunger = 10;
const intialFitness = 10;
const deathFitness = 0;
const getFitBy = 4;
const loseFitnessBy = 3;
const getHungryBy = 5;
const decreaseHungerBy = 3;
const getOlderBy = 1;

function Pet(petName) {
  this.name = petName;
  this.age = initialAge;
  this.hunger = intialHunger;
  this.fitness = intialFitness;
}

Pet.prototype = {
  get isAlive() {
    return (
      this.fitness > deathFitness &&
      this.hunger < deathHunger &&
      this.age < deathAge
    );
  }
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age += getOlderBy;
  this.hunger += getHungryBy;
  this.fitness < loseFitnessBy
    ? (this.fitness = deathFitness)
    : (this.fitness -= loseFitnessBy);
};

//would like to refactor this using Math.min
Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.fitness <= intialFitness - getFitBy
    ? (this.fitness += getFitBy)
    : (this.fitness = intialFitness);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.hunger -= decreaseHungerBy;
};

Pet.prototype.checkUp = function () {
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
};

module.exports = Pet;
