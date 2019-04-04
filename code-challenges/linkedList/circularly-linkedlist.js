const list = require('./linked-list.js');

let myList = new list.Linkedlist();
myList.insert('a');
myList.insert('b');
myList.insert('c');
myList.insert('d');

console.log(myList.head.next);

//input linkedlist
//output boolean
//true if list is circular
function isCirucular(ll){
    let current = ll.head;

    while(current){
        if(current.next === ll.head){
            return true;
        }
        current = current.next;
    }

    return false;
}

console.log( isCirucular(myList) );

//1st: is b->c->d->null ===  a->b->c->d->null