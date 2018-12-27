'use strict';
const util = require('util');


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(){
    this.head = null;
  }
}

Linkedlist.prototype.insert = (value) =>{
  //if head is not assigned, assign head the value and a next value
  let node = new Node (value);
  if(value){

    if( ! this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
};

//Check if a specific value is included in the node list
Linkedlist.prototype.includes = (value) => {
  let valIncluded = false;
  let check = this.head;
  while(check){
    if(check.value === value){
      valIncluded = true;
      console.log('found the value ', valIncluded);
      return valIncluded;
    }
    else{
      check = check.next;
      console.log(check);
    }
  }
  return valIncluded;
};

//print all values in the linked list
Linkedlist.prototype.print =  ()  => {
  let valArr = [];
  let currentVal = this.head;
  while(currentVal){
    valArr.push(currentVal.value);
    currentVal = currentVal.next;
  }

  console.log('all values ', valArr);
  return valArr;
};




