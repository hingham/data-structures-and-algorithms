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

  append(value){  //if head is not assigned, assign head the value and a next value
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
  }

  //Check if a specific value is included in the node list
  includes(value){
    let valIncluded = false;
    let check = this.head;
    while(check){
      if(check.value === value){
        valIncluded = true;
        return valIncluded;
      }
      else{
        check = check.next;
      }
    }
    return valIncluded;
  }
  //print all values in the linked list
  print (){
    let valArr = [];
    let currentVal = this.head;
    while(currentVal){
      valArr.push(currentVal.value);
      currentVal = currentVal.next;
    }
    console.log('all values ', valArr);
    return valArr;
  }

  insertAfter(value, newValue){
    let node = new Node(newValue);
    // console.log(this.head);
    let current = this.head;
    // let currentNext = this.head.next;

    while(current.value!== value) {
      current = current.next;

    }

    node.next = current.next;
    current.next = node;
  }

  insertBefore(value, newValue){
    let node = new Node(newValue);

    let current = this.head;
    let previous = this.head;
    while(current.value!== value){
      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }

  getValue(k){

    if(!k){
      return null;
    }

    let current= this.head;
    let cnt = 0;
    while(current.next){
      current = current.next;
      cnt++;
    }

    let target = cnt - k;
    if(target < 0){ return false; }

    cnt = 0;
    current = this.head;

    while(cnt < target){
      current = current.next;
      cnt ++;
    }
    return current.next.value;
  }

  insert(value){
    let node = new Node(value);
    if(!value){
      return null;
    }

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

}

let list = new Linkedlist();

list.insert('Hannah');
list.insert('emi');
list.insert('jessie');
list.insert('28');

list.getValue( 10);
console.log(util.inspect(list,{depth:10}));

module.exports = {Linkedlist};

function reverse(list){
  let prev = list.head;
  let cur = prev.next;
  let next = null; 
  prev.next = null;

  if(!list.head){
    return false;
  }

  while(cur !== null){
    next = cur.next; //this becomes null on the last round
    cur.next = prev; //2nd node points to 1st
    prev = cur; //prev becomes the cur
    cur = next;
  }
  list.head = prev;
  return list;
}




