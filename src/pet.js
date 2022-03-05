// walk() adss 4 to fitness
// fitness should not be greater than 10
const initialAge = 0;
const intialHunger = 0;
const intialFitness = 10;
const getFitBy = 4;
const loseFitnessBy = 3;
const getHungryBy = 5;
const getOlderBy = 1;

function Pet(petName) {
  this.name = petName;
  this.age = initialAge;
  this.hunger = intialHunger;
  this.fitness = intialFitness;
}

Pet.prototype.growUp = function () {
  this.age += getOlderBy;
  this.hunger += getHungryBy;
  if (this.fitness < loseFitnessBy) {
    this.fitness = 0;
  }
  if (this.fitness >= loseFitnessBy) {
    this.fitness -= loseFitnessBy;
  }
};

//would like to refactor this using Math.min or ternary
Pet.prototype.walk = function () {
  if (this.fitness <= intialFitness - getFitBy) {
    this.fitness += getFitBy;
  }
  if (this.fitness > intialFitness - getFitBy) {
    this.fitness = intialFitness;
  }
};

module.exports = Pet;
