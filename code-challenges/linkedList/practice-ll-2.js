'use strict';

const list = require('./linked-list.js');
const queue = require('../stackAndQueues/stacks-and-queues.js');
const stack = require('../stackAndQueues/stacks-and-queues.js');

const myList = new list.Linkedlist();

myList.insert('1');
myList.insert('2');
myList.insert('3');

function consoleList (ll){
  let current = ll.head;
  while(current){
    current = current.next;
  }

  return;
}

consoleList(myList);

const myQ = new queue.Queue();

const myS = new stack.Stack();

myQ.enqueue('1');
myQ.enqueue('2');
myQ.enqueue('3');

function consoleQueue(q){
  let current = q.front;
  while(current){
    console.log(q.dequeue() );
  }
}



myS.push('1');
myS.push('2');
myS.push('3');

function consoleStack(s){
  // let current = s.top;
  while(s.top){
    console.log(s.pop());
  }
}

consoleStack(myS);

