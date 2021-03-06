'use strict';

class Node {
  constructor(value){
    this.value= value,
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(val){
    if(val){
      let node = new Node(val);
      let next = this.top;
      this.top = node;
      node.next = next;
    }
  }
  pop(){
    if(this.top){
      let pop = this.top;
      let temp = this.top;
      pop.next = null;
      this.top = temp;
      return pop; 
    }
    else{
      return null;
    }
   
  }
  peek(){
    let peek = {...this.top};
    peek.next = null;
    return peek;
  }
}



class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(val){
    let node = new Node(val);
    if(!this.front){
      this.front = node;
      this.rear = node;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    let first = {...this.front};
    first.next = null;
    this.front = this.front.next;
    return first;
  }

  peek(){
    let peek = {...this.front};
    peek.next = null;
    return peek;
  }
}


module.exports = {Stack, Queue, Node};
