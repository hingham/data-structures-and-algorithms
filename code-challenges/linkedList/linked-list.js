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

  insert(value){
    let node = new Node (value);
    let temp;
    if(this.head){
      temp = this.head;
    }
    this.head = node;
    this.head.next = temp;
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
    let current = this.head;

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

}


let list = new Linkedlist();

list.append('Hannah');
list.append('emi');
list.insert('jessie');
list.insertAfter('Hannah', '28');
// list.insertBefore('lisa', 'sam');
console.log(util.inspect(list,{depth:10}));


module.exports = { Linkedlist };



