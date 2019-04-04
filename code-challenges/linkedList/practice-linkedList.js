'use strict';

const list = require('./linked-list.js');

// let result = new lists.Linkedlist();

let linkList = new list.Linkedlist();

linkList.insert('hannah');
linkList.insert('hawaii');
linkList.insert('vacation');

function printValues (linkedList){
  let current = linkedList.head;
  while(current.next){
    current = current.next;
  }
  return;
}

printValues(linkList);
