'use strict';

let sort = require('../insertion-sort.js');

describe('Insertion Sort', () => {

  it('insertionSort(): Returns the same array if it is already sorted', () =>{
    expect(sort.insertionSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
  it('insertionSort(): Returns a sorted array', () => {
    expect(sort.insertionSort([5,9,2,4,3,7])).toEqual([2,3,4,5,7,9]);
  });
  it('insertionSort(): Returns a sorted array that contains positive and negative values', () => {
    expect(sort.insertionSort([2,-9,-4,3,-1,0])).toEqual([-9,-4,-1,0,2,3]);
  });
});