'use strict';
let Hashtable = require('./hashtable.js');

module.exports = (str)  =>{
  let strArr = str.toLowerCase().split(' ');
  let myTable = new Hashtable(1024);
  for(let i =0; i<strArr.length; i++){
    if(myTable.contains(strArr[i].trim())){
      return strArr[i];
    }
    myTable.add(strArr[i], strArr[i]); 
  }

  return null;
};



