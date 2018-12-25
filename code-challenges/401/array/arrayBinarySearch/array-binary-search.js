'use strict';

const arraySearch= module.exports = {};


arraySearch.binarySearch = (arr, key) => {
  let counter = 0;
  let midIdx = Math.ceil((arr.length/2));
  let midVal = arr[midIdx];

  for(let i = 0; i<(arr.length/2); i++){
    console.log('midVal is now: ', midVal, ' key is: ', 60);
    if(midVal === key){
        console.log('found');
      return midIdx;
    }

    else if(key > midVal){
      midIdx = Math.ceil((3 * midIdx)/2);
      midVal = arr[midIdx];
      console.log(key + ' is les than', midVal, midIdx);
    }

    else if (key < midVal){
      midIdx = Math.floor(midIdx/2);
      midVal = arr[midIdx];
      console.log(key + 'less than', midVal, midIdx);
    }
    counter ++;
  }

  return -1;
};


let myArr = [3, 6, 8, 11, 13, 17, 60];

console.log(arraySearch.binarySearch([1, 2, 5], 2));