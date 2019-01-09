'use strict';

class animalShelter {
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
      console.log(idx, j );
      this.pets[idx] = this.pets[j];
      idx++;
    }
    this.pets.length = this.pets.length -1;
    return value;
  }
}

let myAnimal = new animalShelter();

myAnimal.enqueue({type: 'cat', name: 'poppy'});
myAnimal.enqueue({type: 'cat', name: 'cindy'});
myAnimal.enqueue({type: 'dog', name: 'marty'});

console.log(myAnimal.pets);

console.log( myAnimal.dequeue('cat') );

console.log('new shelter ', myAnimal.pets);