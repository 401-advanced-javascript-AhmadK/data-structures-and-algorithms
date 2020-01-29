'use strict';

const arrayShift = require('../array-shift.js');


describe('inserting item & sorting', ()=>{
  it('insert item into the middle of an array',()=>{
    expect(arrayShift.insertShiftArray([2,4,6,8], 5)).toStrictEqual([ 2, 4, 5, 6, 8]);
    expect(arrayShift.insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});

