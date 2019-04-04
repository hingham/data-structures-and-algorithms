'use strict';

class AnimalShelter {
  constructor(){
    this.pets = [];
    this.front = this.pets[0];
    this.last = this.pets[this.pets.length];
  }

  enqueue(obj){
    this.pets.push(obj);
  }

  dequeue(pref){
    if(pref !== 'dog' && pref !== 'cat'){
      return null;
    }

    let value, idx;
    let i = 0;
    while(this.pets[i]['type'] !== pref){
      i++;
    }
    value = this.pets[i];
    idx = i;
    for(let j = idx + 1; j< this.pets.length; j++){
      this.pets[idx] = this.pets[j];
      idx++;
    }
    this.pets.length = this.pets.length -1;
    return value;
  }
}

let myAnimal = new AnimalShelter();

myAnimal.enqueue({type: 'cat', name: 'poppy'});
myAnimal.enqueue({type: 'cat', name: 'cindy'});
myAnimal.enqueue({type: 'dog', name: 'marty'});

module.exports = {AnimalShelter};

