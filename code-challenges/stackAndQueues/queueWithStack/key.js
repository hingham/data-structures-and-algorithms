"use strict";

const sq = require("../stacks-and-queues.js");
const util = require("util");

class queueWithStack {
  constructor() {
    this.i = new sq.Stack();
    this.o = new sq.Stack();
  }

  enqueue(val) {
    this.i.push(val);
  }

  dequeue(val) {
    let popped;
    if (!this.o.top) {
      if (!this.i.top) {
        return null;
      }
      while (this.i.top) {
        this.o.push(this.i.pop().value);
      }
    }

    popped = this.o.pop();

    while (this.o.top) {
      this.i.push(this.o.pop());
    }
    return popped;
  }
}

let myQ = new queueWithStack();

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);

myQ.dequeue();

