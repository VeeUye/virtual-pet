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
  this.fitness -= loseFitnessBy;
};

//would like to refactor this using Math.min or ternary
Pet.prototype.walk = function () {
  this.fitness += 4;
  if ((this.fitness = intialFitness));
  if (this.fitness < intialFitness) {
    this.fitness = intialFitness - this.fitness + this.fitness;
  }
};

module.exports = Pet;
