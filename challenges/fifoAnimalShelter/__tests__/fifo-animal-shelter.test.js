// eslint-disable-next-line semi
'use strict';

const Animal = require('../fifo-animal-shelter.js');

describe('Animal-shelter Module', ()=>{
    
  it('enqueue() adds an animal to queue', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('rabbit');
    expect(animal.cat[0].name).toEqual('cat');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dog.length).toEqual(1);
    expect(animal.enqueue('rabbit')).toBeNull();
  });
    
  it('enqueue() return null if the added animal is not a dog or cat', ()=>{
    let animal = new Animal();
    animal.enqueue('rabbit');
    expect(animal.enqueue('rabbit')).toBeNull();
    expect(animal.enqueue('elephent')).toBeNull();
    expect(animal.enqueue('helo')).toBeNull();
  });
  
  it('dequeue() deletes an animal from the queue', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('rabbit');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dequeue('cat')[0].name).toEqual('cat');
    expect(animal.dequeue('cat').length).toEqual(0);
    expect(animal.dequeue('dog')).toStrictEqual([]);
    expect(animal.dequeue('rabbit')).toBeNull();
  });
});