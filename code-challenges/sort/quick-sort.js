"use strict";

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let sortedArr = [];
    let pivot = arr.shift();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return sortedArr.concat(quickSort(left), pivot, quickSort(right));
  }
}

quickSort([7, 6, 10, 3, 8, 5]);
