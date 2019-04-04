const t = require('../../tree/tree.js');
const ll = require('../../linkedList/linked-list.js');
const sq = require('../../stackAndQueues/stacks-and-queues.js');


let myStack = new sq.Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

const printStack = (stack) =>{
  let arr= [];
  function rstack(node){
    if(!node.next){
      arr.push(node.value);
    }
    else{
      rstack(node.next);
      arr.push(node.value);
    }
  }
  rstack(stack.top);
  console.log(arr);

};

printStack(myStack);

// let myQueue = new sq.Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);


// const printQ = (queue)=>{
//   let arr = [];
//   function rQ(node){
//     if(node.next===null){
//       arr.push(node.value);
//     }
//     rQ(node.next);
//     arr.push(node.value);
//   }
//   console.log(queue.front.next);

//   rQ(queue.front);
//   console.log(arr);
// };

// printQ(myQueue);

let myTree = new t.BinaryTree();

let a = new t.Node(5);
let b = new t.Node(3);
let c = new t.Node(10);
let d = new t.Node(2);
let e = new t.Node(4);
let f = new t.Node(8);
let g = new t.Node(12);
let h = new t.Node(13);
let i = new t.Node(14);

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
c.right = g;
g.right = h;
h.right = i;
myTree.root = a;

function preOrder(tree){
  let tArr = [];
  const _walk = (node)=>{
    tArr.push(node.value);
    if(node.left){
      _walk(node.left);
    }

    if(node.right){
      _walk(node.right);
    }
  };
  _walk(tree.root);
}

preOrder(myTree);


function inOrder(tree){
  let tArr = [];
  const _walk = (node)=>{
    if(node.left){
      _walk(node.left);
    }

    tArr.push(node.value);

    if(node.right){
      _walk(node.right);
    }
  };
  _walk(tree.root);
}
  
inOrder(myTree);

function postOrder(tree){
  let tArr = [];
  const _walk = (node)=>{
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
    tArr.push(node.value);

  };
  _walk(tree.root);
}
    
postOrder(myTree);


function breadthFirst(tree){

  let tArr = [tree.root];
  while(tArr.length>0){
    let node = tArr.shift();
    if(node.left){
      tArr.push(node.left);
    }
    if(node.right){
      tArr.push(node.right);
    }
  }
}

breadthFirst(myTree);


