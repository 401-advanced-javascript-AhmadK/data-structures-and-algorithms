'use strict';

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middleValue = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleValue);
  const right = arr.slice(middleValue);

  return merge(mergeSort(left), mergeSort(right));
};

function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([8,4,23,42,16,15]));
  
module.exports = mergeSort;
