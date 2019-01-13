'use strict';

const Tree = require('../tree.js');

let testTree = new Tree.BinaryTree();
let a = new Tree.Node(5);
let b = new Tree.Node(3);
let c = new Tree.Node(10);
let d = new Tree.Node(2);
let e = new Tree.Node(4);
let f = new Tree.Node(8);


a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
testTree.root = a;

describe('binary tree', () =>{

  describe('pre order', ()=>{
    it('returns null if there are no value in tree', ()=>{
      let newTree = new Tree.BinaryTree();
      let result = newTree.preOrder();
      expect(result).toBe(null);
    });
    it('prints values before visiting the node', ()=>{
      let result = testTree.preOrder();
      expect(result).toEqual([5, 3, 2, 4, 10, 8]);
    });
    it('returns an array of values 6 values', ()=>{
      let result = testTree.preOrder();
      expect(result.length).toEqual(6);
    });
  });
  describe('inOrder', ()=>{
    it('returns null if no values in tree', ()=>{
      let newTree = new Tree.BinaryTree();
      let result = newTree.inOrder();
      expect(result).toBe(null);
    });
    it('prints values smallest to largest', ()=>{
      let result = testTree.inOrder();
      expect(result).toEqual([2, 3, 4, 5, 8, 10]);
    });
    it('returns an array of values 6 values', ()=>{
      let result = testTree.inOrder();
      expect(result.length).toEqual(6);
    });
  });

  describe('postOrder', ()=>{
    it('returns null if no values in tree', ()=>{
      let newTree = new Tree.BinaryTree();
      let result = newTree.postOrder();
      expect(result).toBe(null);
    });
    it('prints values after visiting the node', ()=>{
      let result = testTree.postOrder();
      expect(result).toEqual([2, 4, 3, 8, 10, 5]);
    });
    it('returns an array of values 6 values', ()=>{
      let result = testTree.postOrder();
      expect(result.length).toEqual(6);
    });
  });

});


describe('binary search tree', () =>{
  let testSearchTree = new Tree.BinarySearchTree();
  testSearchTree.root = a;
  describe('add', ()=>{
    it('it adds a node to the array', ()=>{
      let length = testSearchTree.inOrder().length;
      testSearchTree.add(7);

      let result = testSearchTree.inOrder();
      expect(result.length).toEqual(length + 1);
    });
    it('it adds the node in the correct place', ()=>{
      let result = testSearchTree.inOrder();
      expect(result).toEqual([2, 3, 4, 5, 7, 8, 10]);
    });
    it('it alters the array if no value is provided', ()=>{
      let arr = testSearchTree.inOrder();
      testSearchTree.add(7);

      let result = testSearchTree.inOrder();
      expect(result.length).not.toEqual(arr);
    });
  });
  describe('contains', ()=>{
    it('returns true if value is found in tree', ()=>{
      let result = testSearchTree.contains(2);
      expect(result).toBe(true);
    });
    it('returns false if value is not defined in tree', ()=>{
      let result = testSearchTree.contains(11);
      expect(result).toBe(false);
    });
    it('does not change the contents of the tree', ()=>{
      let original = testSearchTree;
      testSearchTree.contains(11);
      expect(original).toEqual(testSearchTree);
    });
  });

});


