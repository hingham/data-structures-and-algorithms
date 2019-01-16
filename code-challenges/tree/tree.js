'use strict';

let q = require('../stackAndQueues/stacks-and-queues.js');

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    if(this.root===null){
      return null;
    }
    let nodes = [];
    let _walk = (node)=>{
      nodes.push(node.value);
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    // console.log(nodes);
    return nodes;
  }

  inOrder(){
    if(this.root===null){
      return null;
    }
    let nodes = [];
    let _walk = (node)=>{
      if(node.left){
        _walk(node.left);
      }
      nodes.push(node.value);
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    // console.log(nodes);
    return nodes;
  }

  postOrder(){
    if(this.root===null){
      return null;
    }
    let nodes = [];
    let _walk = (node)=>{
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
      nodes.push(node.value);
    };
    _walk(this.root);
    // console.log(nodes);
    return nodes;
  }

  breadthFirst (){
    if(!this.root){
      return null;
    }
    let q1= [];
    let q2 = [];
    let val;
    q1.unshift(this.root);
    while(q1.length){
      val = q1.pop();
      if(val.left){
        q1.unshift(val.left);
      }
      if(val.right){
        q1.unshift(val.right);
      }
      q2.push(val.value);
    }
    return q2;
  }

  maxVal(){
    if(!this.root){return null;}
    let q = [];
    let max = 0;
    let val;

    q.push(this.root);
    while(q.length){
      val = q.shift();
      if(val.left){q.push(val.left);}
      if(val.right){q.push(val.right);}
      if(val.value > max){
        max = val.value;
      }
    }
    return max;
  }

}


class BinarySearchTree extends BinaryTree {
  constructor(){
    super();
    this.data = this.root;
  }

  add(val){
  
    let _walk = (node)=>{
      if(val < node.value){
        if(node.left === null){
          node.left = new Node(val);
        }
        else {_walk(node.left);}
      }
      if(val > node.value){
        if(node.right ===null){
          node.right = new Node(val);
        }
        else{_walk(node.right);}
      }
    };
    _walk(this.root);
  }

  contains(val){
    let bool = true;
    let _walk = (node)=>{
      if(node === null){
        bool= false;
        return;
      }
      else if(val < node.value){
        _walk(node.left);
      }
      else if(val > node.value){
        _walk(node.right);
      }
      else if(val === node.value){
        bool = true;
        return;
      }
    };
    _walk(this.root);
    return bool;
  }
}


let tree = new BinaryTree();
let a = new Node(5);
let b = new Node(3);
let c = new Node(10);
let d = new Node(2);
let e = new Node(4);
let f = new Node(8);
let g = new Node(12);
let h = new Node(13);
let i = new Node(14);

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
c.right = g;
g.right = h;
h.right = i;
tree.root = a;



console.log(tree.breadthFirst() );

// tree.postOrder();

module.exports= {Node, BinaryTree, BinarySearchTree};