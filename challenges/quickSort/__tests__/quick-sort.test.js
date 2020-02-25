'use strict';

let quickSort = require('../quick-sort.js');

describe('Quich Sort tests', () => {
  it('quickSort(): returns the array not sorted if the left and right values are not provided as arguments', () => {
    expect(quickSort.quickSort([ 8, 4, 23, 42, 16, 15 ])).toEqual([ 8, 4, 23, 42, 16, 15 ]);
  });
  it('quickSort(): returns the array sorted if the right and lift values are provided', () => {
    expect(quickSort.quickSort([ 8, 4, 23, 42, 16, 15 ], 0, 5)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
  it('quickSort(): returns array with undefined values if the left and right values are not correct', () => {
    expect(quickSort.quickSort([ 8, 4, 23, 42, 16, 15 ], 0, 10)).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      4,
      8,
      undefined,
      15,
      16,
      23,
      42,
    ]);
  });
  it('quickSort(): returns a sorted array even with negative numbers', () => {
    expect(quickSort.quickSort([20,18,12,8,5,-2], 0, 5)).toEqual([-2,5,8,12,18,20]);
  });
  it('quickSort(): returns a sorted array even it has repeated values', () => {
    expect(quickSort.quickSort([5,12,7,5,5,7], 0, 5)).toEqual([5,5,5,7,7,12]);
  });
});
