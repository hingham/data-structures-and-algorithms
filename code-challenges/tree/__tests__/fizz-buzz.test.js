'use strict';

const Tree = require('../tree.js');
const fizzBuzz = require('../fizzBuzzTree/fizz-buzz-tree.js');

let testTree = new Tree.BinaryTree();
let a = new Tree.Node(5);
let b = new Tree.Node(3);
let c = new Tree.Node(15);
let d = new Tree.Node(2);
let e = new Tree.Node(4);
let f = new Tree.Node(8);


a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
testTree.root = a;
console.log(testTree);
fizzBuzz(testTree);


describe('fizzBuzzTree', ()=>{
  it('replaces all multiples of three values with fizz', ()=>{

    expect(testTree.root.value).toEqual('fizz');
  });
  it('replaces all multiples of five values with fizz', ()=>{
    expect(testTree.root.left.value).toEqual('buzz');      
  });
  it('replaces all multiples of three and five  values with fizz', ()=>{
    expect(testTree.root.right.value).toEqual('fizzBuzz');      
  
  });
});
