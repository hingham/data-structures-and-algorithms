'use strict';

const sq = require('../stacks-and-queues.js');
const util = require('util');

class queueWithStack {
  constructor(){
    this.front = null;
    this.rear = null;
    this.s = new sq.Stack();
  }

  enqueue(val){
    
    this.s.top = this.s.top;
    let qued = new sq.Stack();
    // let current = this.s.top;
    while (this.s){
      ('in while');
      qued.push(this.s.pop().value);
    }
    this.s.push(val);
    
    while(qued){
      this.s.push(qued.pop().value);
    }
    // this.front = qued.top;
    return this;
  }

  dequeue(val){
    let copy =  new sq.Stack();
    copy.top = this.s.top;
    let qued = new sq.Stack();
    let current = copy.top;
    while (current.next){
      ('in while');
      let node = copy.pop();
      qued.push(node.value);
      current = current.next;
    }
    qued.push(current.value);
    let popped = qued.pop();
    this.front = qued.top;
    return this.s.pop();
  }

}



// module.exports(queueWithStack);
let myQ = new queueWithStack();

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);

// myQ.dequeue();


// console.log(util.inspect(myQ.s, {showHidden: false, depth: null}));


