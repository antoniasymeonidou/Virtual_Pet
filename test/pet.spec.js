const Pet = require('../src/pet');

// new pet creamSocks
describe('constructor', () => {
  it('returns an object', () => {
    const pet = new Pet('creamSocks');
    expect(pet.name).toBe('creamSocks');
  });
});

// set age to zero
describe('constructor', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('creamSocks');
    expect(pet.age).toEqual(0);
  });
});

// age increases by 1
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('creamSocks');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});

// hunger  starts at 0
describe('constructor', () => {
  it('has a initial hunger on 0', () => {
    const pet = new Pet('creamSocks');
    expect(pet.hunger).toEqual(0);
  });
});

// hunger increases by 5
describe('growUp', () => {
  it('increments the hunger by 5', () => {
    const pet = new Pet('creamSocks');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});

// fitness starts at 10
describe('constructor', () => {
  it('has a initial fitness on 10', () => {
    const pet = new Pet('creamSocks');
    expect(pet.fitness).toEqual(10);
  });
});

// fitness increases by 3
describe('growUp', () => {
  it('increments the fitness by 3', () => {
    const pet = new Pet('creamSocks');
    pet.growUp();
    expect(pet.fitness).toEqual(13);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('creamSocks');
    pet.age = 30;
    expect(pet.feed).toThrow('Your pet is no longer alive');
  });
});

// walk starts at 4
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('creamSocks');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('creamSocks');
    pet.age = 30;
    expect(pet.feed).toThrow('Your pet is no longer alive');
  });
});

// decrease hunger by 3
describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('creamSocks');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('creamSocks');
    pet.age = 30;
    expect(pet.feed).toThrow('Your pet is no longer alive');
  });
});

// check hunger and fitness levels of a pet
describe('checkUp', () => {
  it('checks pet', () => {
    const pet = new Pet('creamSocks');
    makePetOnlyHungry(pet);
    expect(pet.checkUp()).toEqual('I am hungry');
    makePetOnlyUnfit(pet);
    expect(pet.checkUp()).toEqual('I need a walk');
    makePetUnfitAndHungry(pet);
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    makePetFitAndHealthy(pet);
    expect(pet.checkUp()).toEqual('I feel great!');
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('creamSocks');
    pet.age = 30;
    expect(pet.feed).toThrow('Your pet is no longer alive');
  });
});

const HUNGER_LIMIT = 5;
const FITNESS_LIMIT = 3;
function makePetOnlyHungry(pet) {
   pet.hunger = HUNGER_LIMIT;
   pet.fitness = FITNESS_LIMIT + 1;
}

function makePetOnlyUnfit(pet) {
  pet.hunger = HUNGER_LIMIT - 1;
  pet.fitness = FITNESS_LIMIT;
}

function makePetUnfitAndHungry(pet) {
  pet.hunger = HUNGER_LIMIT;
  pet.fitness = FITNESS_LIMIT;
}

function makePetFitAndHealthy(pet){
  pet.hunger = HUNGER_LIMIT - 1;
  pet.fitness = FITNESS_LIMIT + 1;
}

describe('pet is not alive', () => {
it('error when the pet is not alive', () => {
  const pet = new Pet('creamSocks');
  expect(pet.isAlive()).toBe(true);
  kill(pet);
  expect(pet.isAlive()).toBe(false);
  expect(dieOfLaziness().isAlive()).toBe(false);
  expect(dieOfHunger().isAlive()).toBe(false);
  expect(dieOfOldAge().isAlive()).toBe(false);

});
});

function kill(pet){
  pet.fitness = 0;
  pet.hunger = 10;
  pet.age = 30;
}

function dieOfLaziness() {
  const pet = new Pet("creamSocks");
  pet.fitness = 0;
  return pet;
}

function dieOfHunger() {
  const pet = new Pet("creamSocks");
  pet.hunger = 10;
  return pet;
}

function dieOfOldAge() {
  const pet = new Pet("creamSocks");
  pet.age = 30;
  return pet;
}