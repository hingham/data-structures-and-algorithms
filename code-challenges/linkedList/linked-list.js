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

  insert (value) {
    //if head is not assigned, assin head the value and a next value
    let node = new Node (value);
    if(value){
      
      if( ! this.head){
        this.head = node;
        return;
      }
      //
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  includes (value) {
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
  }

  print () {
    let valArr = [];
    let currentVal = this.head;
    while(currentVal){
      valArr.push(currentVal.value);
      currentVal = currentVal.next;
    }

    console.log('all values ', valArr);
    return valArr;
  }
}

let list = new Linkedlist();
list.insert('Hannah');
list.insert('Natalie');
list.insert('Leo');
list.insert(3);

list.includes(3);

list.print();

console.log(util.inspect(list, {depth: 4}));

module.exports = {Node, Linkedlist};



