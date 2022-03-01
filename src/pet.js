// const Pet = (petname) => {
//   this.name = petName;
// };

function Pet(petName) {
  this.name = petName;
  this.age = 0;
}

Pet.prototype.growUp = function () {
  this.age += 1;
};

module.exports = Pet;
