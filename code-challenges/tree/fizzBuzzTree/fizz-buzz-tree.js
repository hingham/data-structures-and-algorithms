'use strict';
const tree = require('../tree.js');

// let myTree = new tree.BinaryTree();
// let a = new tree.Node(7);
// let b = new tree.Node(15);
// let c = new tree.Node(2);
// let d = new tree.Node(2);
// let e = new tree.Node(4);
// let f = new tree.Node(8);
// let g = new tree.Node(12);
// let h = new tree.Node(13);
// let i = new tree.Node(14);

// a.left = b;
// a.right = c;
// c.left = f;
// b.left = d;
// b.right = e;
// c.right = g;
// g.right = h;
// h.right = i;
// tree.root = a;

function fizzBuzz(t){
  const _walk = (node) => {
    if(!node.value){
      return null;
    }
    else if( (node.value % 3 ===0) && (node.value % 5 ===0 )){
      node.value = 'fizzBuzz';
    }
    else if(node.value % 3===0){
      node.value = 'buzz';
    }
    else if (node.value % 5 ===0){
      node.value = 'fizz';
    }

    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }

  };
  _walk(t.root);
  console.log(tree);
  return t;
}


module.exports = fizzBuzz;
