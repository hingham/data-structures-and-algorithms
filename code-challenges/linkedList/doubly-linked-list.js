'use strict';
const util = require('util');


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Linkedlist {
  constructor(){
    this.tail = null;
    this.head = null;
  }
}

Linkedlist.prototype.insert = (value) => {
  let node = new Node(value);
  if(! this.head){
    this.head = node;
    this.tail = node;  
  }
  else{
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

let list = new Linkedlist();

list.insert('one');
list.insert('two');
list.insert('three');

console.log(list, {depth: 3});