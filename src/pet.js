
const HUNGRY = 5;
const FIT = 3;
const AGE_OF_DEATH = 30;
const STARVATION = 10;
const FIT_DEATH = 0; 

function Pet (name) {
  this.name = name
  this.age = 0
  this.hunger = 0
  this.fitness = 10
}

/*
When a pet grows up, hunger and fitness increase
*/
Pet.prototype.growUp = function () {
  this.age += 1
  this.hunger += HUNGRY 
  this.fitness += FIT 
};

Pet.prototype.walk = function () {
  const maxFitness = 10
  if ((this.fitness + 4) <= 10) {
    this.fitness += 4
  } else {
    this.fitness = maxFitness 
  }
}

Pet.prototype.feed = function () {
  const minHunger = 0
  if ((this.hunger - 3) >= 0) {
    this.hunger -= 3
  } else {
    this.hunger = minHunger 
  }
}

Pet.prototype.checkUp = function () {
  if ((this.hunger >= HUNGRY) && (this.fitness <= FIT)) {
    return 'I am hungry AND I need a walk';
  } else if (this.hunger >= HUNGRY) {
    return 'I am hungry';
  } else if (this.fitness <= FIT) {
    return 'I need a walk';
  } else {
    return 'I feel great!';
  }
}

Pet.prototype.isAlive = function (){
    return this.fitness > FIT_DEATH && 
           this.hunger < STARVATION && 
           this.age < AGE_OF_DEATH ;
}

if (!this.isAlive) {
    throw new Error('Your pet is no longer alive');
  }

module.exports = Pet;