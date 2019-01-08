'use strict';

let shelter = require('../fifoAnimalShelfter/fifo-animal-shelter.js');

describe('shefter', () =>{
  describe('dequeue', () =>{
    let myAnimals = new shelter.animalShelfter();
    myAnimals.push({type: 'cat', name: 'poppy'});
    myAnimals.push({type: 'cat', name: 'mindy'});
    myAnimals.push({type: 'dog', name: 'marty'});
    it('removes the first cat', () =>{
      myAnimals.dequeue('cat');
      expect(myAnimals.dequeue().name).toEqual('poppy');
    });
    it('shrinks the original array by 1', () =>{
      myAnimals.dequeue('cat');
      expect(myAnimals.length).toEqual(2);
    });
    it('returns null if arguemnt is neither cat nor dog', () =>{
      let result = myAnimals.dequeue('squirell');
      expect(result).toEqual(null);
    });
  });

  describe('enqueue', () =>{
    it('adds another pet to the array', () => {
      let myAnimals = new shelter.animalShelfter();
      myAnimals.push({type: 'cat', name: 'poppy'});
      myAnimals.push({type: 'cat', name: 'mindy'});
      myAnimals.push({type: 'dog', name: 'marty'});
      expect(myAnimals.pets[2].name).toEqual('marty');
    });
    it('increases the length of the array by 1', () =>{
      let myAnimals = new shelter.animalShelfter();
      myAnimals.push({type: 'cat', name: 'poppy'});
      myAnimals.push({type: 'cat', name: 'mindy'});
      myAnimals.push({type: 'dog', name: 'marty'});
      expect(myAnimals.pets.length).toEqual(3);

    });
    it('the first value is the previous fist value', () =>{
      let myAnimals = new shelter.animalShelfter();
      myAnimals.push({type: 'cat', name: 'poppy'});
      myAnimals.push({type: 'cat', name: 'mindy'});
      myAnimals.push({type: 'dog', name: 'marty'});
      expect(myAnimals.pets[0]).toEqual('poppy');
    });
  });
    
});