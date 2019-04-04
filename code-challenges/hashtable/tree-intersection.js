'use strict';
let Hashtable = require('./hashtable.js');
let tree = require('../tree/tree.js');
const util= require('util');


function treeIntersection(t1, t2){
  let iArr = [];
  let qArr=[t1.root];
  let hash = new Hashtable(1024);

  while(qArr.length){
    console.log('searching tree');
    let node = qArr.shift();
    if(node.left){qArr.push(node.left);}
    if(node.right){ qArr.push(node.right);}
    hash.add(node.value);
  }
  qArr = [t2.root];
  while(qArr.length){
    console.log('searching tree');
    let node = qArr.shift();
    if(node.left){qArr.push(node.left);}
    if(node.right){ qArr.push(node.right);}
    if(hash.contains(node.value)){
      iArr.push(node.value);
    }
  }

  console.log('the hashtable', util.inspect(hash, {showHidden: false, depth: null}));
  console.log('the arr', iArr);
  return iArr;
}


function breadthFirstSearch(t, cb){
  let queue = [t.root];
  while(queue.length){
    console.log('searching tree');
    let node = queue.shift();
    if(node.left){return queue.push(node.left);}
    if(node.right){return queue.push(node.right);}
    cb(node);  
  }
}



let t1 = new tree.BinaryTree();

let a = new tree.Node('10');
let b = new tree.Node('6');
let c = new tree.Node('5');
let d = new tree.Node('15');
let e = new tree.Node('8');
let f = new tree.Node('2');

a.left = b;
a.right= c;
c.left = f;
b.left = d;
b.right = e;
t1.root = a;

let t2 = new tree.BinaryTree();

let ab = new tree.Node('11');
let bc = new tree.Node('6');
let cd = new tree.Node('5');
let de = new tree.Node('15');
let ef = new tree.Node('9');
let fg = new tree.Node('3');

ab.left = bc;
ab.right= cd;
cd.left = fg;
bc.left = de;
bc.right = ef;
t2.root = ab;

let t3 = new tree.BinaryTree();

let x = new tree.Node('0');
let y = new tree.Node('0');
let z = new tree.Node('0');



t3.root = x;
x.right = y;
x.left = z;




treeIntersection(t1, t2) ;

module.exports={treeIntersection, t1, t2, t3};