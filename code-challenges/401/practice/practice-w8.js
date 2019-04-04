const t = require("../../tree/tree.js");
const ll = require("../../linkedList/linked-list.js");
const sq = require("../../stackAndQueues/stacks-and-queues.js");
const HashTable = require("../../hashtable/hashtable.js");

let myStack = new sq.Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

function iterateStack(stack) {
  let current = stack.top;
  while (current) {
    current = current.next;
  }
}

iterateStack(myStack);

function recurseStack(stack) {
  let top = stack.top;
  const _walk = node => {
    if (node === null) {
      return;
    }
    _walk(node.next);
  };
  _walk(stack.top);
}

let myList = new ll.Linkedlist();

myList.insert("a");
myList.insert("b");
myList.insert("c");

function linkListIterate(ll) {
  let current = ll.head;
  while (current) {
    current = current.next;
  }
}

linkListIterate(myList);

function linkedListRecurse(ll) {
  let head = ll.nead;
  const _walk = node => {
    if (node === null) {
      return;
    }
    _walk(node.next);
  };
  _walk(head);
}

linkListIterate(myList);

let myQ = new sq.Queue();
myQ.enqueue("x");
myQ.enqueue("y");
myQ.enqueue("z");

function iterateQ(q) {
  let current = q.front;
  while (current) {
    current = current.next;
  }
}

iterateQ(myQ);

function recurseQ(q) {
  let current = q.front;
  const _walk = node => {
    if (node === null) {
      return;
    }
    _walk(node.next);
  };
  _walk(current);
}

recurseQ(myQ);

let myHash = new HashTable(100);
myHash.add("hannah", "h");
myHash.add("nick", "n");
myHash.add("ginger", "g");

function iterateHash(hash) {
  for (let i = 0; i < hash.table.length; i++) {
    if (hash.table[i]) {
    }
  }
}

iterateHash(myHash);

function iterateHash(hash) {
  const _walk = idx => {
    if (idx === hash.table.length) {
      return;
    }

    if (hash.table[idx]) {
    }

    _walk(idx + 1);
  };
  _walk(0);
}

iterateHash(myHash);
