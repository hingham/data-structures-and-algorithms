'use strict';

let arr = [];

function fibonacci(num) {
  arr.push(num);
  if (num <= 1) {
    arr.push(1);
    return 1;
  }
  let number = fibonacci(num - 1) + fibonacci(num - 2);
  return number;   
}

fibonacci(6);


function printAll(arr, k){
  let n = arr.length;
  stringCombos(arr, '', n, k);
}

function stringCombos(arr, str, n, k){
  if(k === 0){
    return;
  }
  for( let i = 0; i < n; ++i){
    let newStr;
    if(str.split('').includes(arr[i])){
      newStr = '';
    }
    else{
      newStr = str + arr[i];
      stringCombos(arr, newStr, n, k-1);
    }
  }
}


printAll(['1', '2', '3'], 3);