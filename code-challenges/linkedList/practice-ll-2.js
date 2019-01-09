'use strict';

const list = require('./linked-list.js');

const myList = new list.Linkedlist();

myList.insert('1');
myList.insert('2');
myList.insert('3');

function consoleList (ll){
  let current = ll.head;
  while(current){
    console.log(current.value);
    current = current.next;
  }

  return;
}

consoleList(myList);