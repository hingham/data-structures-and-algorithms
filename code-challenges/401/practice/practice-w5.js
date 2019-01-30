const t = require('../../tree/tree.js');
const ll = require('../../linkedList/linked-list.js');
const sq = require('../../stackAndQueues/stacks-and-queues.js');


let myList = new ll.Linkedlist();

myList.append(1);
myList.append(2);
myList.append(9);


console.log(`myList ${myList}`);
///printing the linked list and solving the barometer problem
myList.print();
function printList(list){
  if (list.head){
    console.log('has a head');
    let current = list.head;
    let previous = null;
    while(current){
      current.prev = previous;
      previous = current;
      current = current.next;
    }

    while(previous){
      if(previous.value === 9){
        previous.value = 0;
        previous.prev.value ++;
      }

      if(previous.value === 10){
        previous = 0;
        previous.prev.value ++;
      }
      ///reset the previous
      previous = previous.prev;
    }    
    list.print();
  }

}

printList(myList);

let myStack = new sq.Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

const printStack = (stack) =>{
  let current = stack.top;

  while(current){
    console.log(current.value);
    current = current.next;
  }
};

printStack(myStack);

let myQueue = new sq.Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);


const printQ = (queue)=>{
  let current = queue.front;

  while(current){
    console.log(current.value);
    current = current.next;
  }

};

printQ(myQueue);

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
  console.log(tArr);
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
  console.log(tArr);
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
  console.log(tArr);
}
    
postOrder(myTree);


