'use strict'; 

function quickSort(arr, left, right) {
  let position;
  if (arr.length > 1) {
    position = partition(arr, left, right);
    if (left < position - 1) { 
      quickSort(arr, left, position - 1);
    }
    if (position < right) { 
      quickSort(arr, position, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right); 
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, left, right){
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

module.exports = {quickSort};
console.log(quickSort([8,4,23,42,16,15], 0, 5));
console.log(quickSort([20,18,12,8,5,-2], 0, 5));
console.log(quickSort([5,12,7,5,5,7], 0, 5));
console.log(quickSort([2,3,5,7,13,11], 0, 5));