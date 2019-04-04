'use strict';

const arraySearch= module.exports = {};


arraySearch.binarySearch = (arr, key) => {
  let counter = 0;
  let midIdx = Math.ceil((arr.length/2));
  let midVal = arr[midIdx];

  for(let i = 0; i<(arr.length/2); i++){
    if(midVal === key){
      return midIdx;
    }

    else if(key > midVal){
      midIdx = Math.ceil((3 * midIdx)/2);
      midVal = arr[midIdx];
    }

    else if (key < midVal){
      midIdx = Math.floor(midIdx/2);
      midVal = arr[midIdx];
    }
    counter ++;
  }

  return -1;
};


let myArr = [3, 6, 8, 11, 13, 17, 60];

