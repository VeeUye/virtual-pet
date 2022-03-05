// walk() adss 4 to fitness
// fitness should not be greater than 10
const initialAge = 0;
const intialHunger = 0;
const intialFitness = 10;
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
// currently no max on hunger
Pet.prototype.growUp = function () {
  this.age += getOlderBy;
  this.hunger += getHungryBy;
  this.fitness < loseFitnessBy
    ? (this.fitness = 0)
    : (this.fitness -= loseFitnessBy);
};

//would like to refactor this using Math.min
Pet.prototype.walk = function () {
  this.fitness <= intialFitness - getFitBy
    ? (this.fitness += getFitBy)
    : (this.fitness = intialFitness);
};

Pet.prototype.feed = function () {
  this.hunger -= decreaseHungerBy;
};

Pet.prototype.checkUp = function () {
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

Pet.prototype.isAlive = function () {};

module.exports = Pet;
