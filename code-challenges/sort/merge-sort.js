function merge(arrLeft, arrRight) {
  let sortedArr = [];
  while (arrLeft.length && arrRight.length) {
    if (arrLeft[0] <= arrRight[0]) {
      sortedArr.push(arrLeft[0]);
      arrLeft.shift();
    } else {
      sortedArr.push(arrRight[0]);
      arrRight.shift();
    }
  }
  while (arrLeft.length) {
    sortedArr.push(arrLeft[0]);
    arrLeft.shift();
  }
  while (arrRight.length) {
    sortedArr.push(arrRight[0]);
    arrRight.shift();
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = Math.ceil(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

let unsortedArr = [3, 4, 10, 7, 5, 11, 6];

mergeSort(unsortedArr);

module.exports = { mergeSort };
