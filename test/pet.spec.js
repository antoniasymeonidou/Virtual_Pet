const Pet = require('../src/pet');

// new pet creamSocks
describe('constructor', () => {
  it('returns an object', () => {
    const pet = new Pet('creamSocks');
    expect(pet.name).toBe('creamSocks');
  });
});

// age start at 0
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
});

// walk starts at 4 
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('creamSocks');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});

// decrease hunger by 3
describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('creamSocks');
    pet.hunger = 3;
    pet.feed();
    expect(pet.feed).toEqual(0);
  });
});