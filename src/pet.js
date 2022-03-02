// walk() adss 4 to fitness
// fitness should not be greater than 10

function Pet(petName) {
  this.name = petName;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

//would like to refactor this using Math.min
Pet.prototype.walk = function () {
  if ((this.fitness = 10));
  if (this.fitness < 10) {
    this.fitness = 10 - this.fitness + this.fitness;
  }
};

module.exports = Pet;
