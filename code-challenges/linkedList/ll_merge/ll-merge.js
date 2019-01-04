'use strict';

const ll = require('../linked-list.js');

let list = new ll.Linkedlist();
let list2 = new ll.Linkedlist();

list.insert('a');
list.insert('b');
list.insert('c');
list.insert('d');


list2. insert('1');
list2.insert('2');
list2.insert('3');

function mergedList(l1, l2){
  if(arguments.length ===1){
    return l1;
  };
  let curList1 = l1.head;
  let curList2 = l2.head;
  console.log(curList1, curList2);
  
  while(curList1.next && curList2.next){
  
    let temp = curList2.next;

    curList2.next = curList1.next;
    curList1.next = curList2;

    curList1 = curList2.next;
    curList2 = temp;

  }

  // if(curList2.next){
  //   curList2.next = curList1;
  // }

  if(curList1.next){
    curList1.next = curList1; 
  }

  curList1.next = curList2;
  // console.log('final list' , l1.head);
  return l1;
}

mergedList(list, list2);
console.log(list);

list.print();

module.exports = {mergedList};
