const ll = require('../linkedList/linked-list.js');
const util = require('util');

class Hashtable {
  constructor(size){
    this.size = size;
    this.table = [];
  }

  //turn something into a hash number
  hash(key) {
    let keyArr =  key.split('');
    let numbers = keyArr.reduce( (acc, val, idx)=>{
      return acc += val.charCodeAt(0);
    }, 0);
    return Math.floor((numbers % 19) * this.size / 19);
  }

  add(key, value){
    let hash = this.hash(key);
    if(! this.table[hash]) {this.table[hash] = new ll.Linkedlist();}
    this.table[hash].insert({[key]: value}); 
  }

  // A method/function named Find that takes in the key and returns the value from key/value pair.
  find(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      this.search(this.table[hash], key);
      let keyObj = this.search(this.table[hash], key);
      if(keyObj){return keyObj[key];}
    }
    return null;
  }

  contains(key){
    let hash = this.hash(key);
    let bool = false;
    if(this.table[hash]){
      this.search(this.table[hash], key);
      let keyObj = this.search(this.table[hash], key);
      if(keyObj){
        console.log(keyObj);
        return bool = true;
      }
    }
    return bool;
  }

  search(linkList, key){
    let item = null;
    const searchList = (node)=>{
      //base case
      if(node === null){return;}
      if(Object.keys(node.value)[0] === key){ return item = node.value;}
      searchList(node.next);
    };
    searchList(linkList.head);
    return item;
  }

  // A method/function named GetHash that takes in a key and returns the index in the array the key is stored.
  GetHash(key){
    return this.hash(key);
  }

}




module.exports = Hashtable;


