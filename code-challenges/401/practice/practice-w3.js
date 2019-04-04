const t = require('../../tree/tree.js');
const ll = require('../../linkedList/linked-list.js');
const sq = require('../../stackAndQueues/stacks-and-queues.js');

let myStack = new sq.Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

function printStack(stack){
  let current = stack.top;
  while(current.next){
    current = current.next;
  }
}

printStack(myStack);

let myQueue = new sq.Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);


function printQueue(queue){
  while(queue.front){
  }
}

printQueue(myQueue);


let myList = new ll.Linkedlist();

myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);

function printList(list){
  let current = myList.head;
  while(current.next){
    current= current.next;
  }
}

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
  let arr = [];
  function _walk(node){
    arr.push(node.value);

    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }  
    }

  _walk(tree.root);
  return arr;
}

preOrder(myTree);

function inOrder(tree){
    let arr = [];
    function _walk(node){

      if(node.left){
        _walk(node.left);
      }
      arr.push(node.value);

      if(node.right){
        _walk(node.right);
    }
}
    _walk(tree.root);
    return arr;
  
}

inOrder(myTree);


function postOrder(tree){
    let arr = [];
    function _walk(node){

      if(node.left){
        _walk(node.left);
      }

      if(node.right){
        _walk(node.right);
    }
    arr.push(node.value);
    }
    _walk(tree.root);
    return arr;
  
}

postOrder(myTree);

function breadth(tree){
    let q = [];
    let a = [];
    let val;
    q.push(tree.root);
    while(q.length){
        val = q.pop();
        if(val.left){q.unshift(val.left);}
        if(val.right){q.unshift(val.right);}
        a.unshift(val.value);
    }

}

breadth(myTree);
