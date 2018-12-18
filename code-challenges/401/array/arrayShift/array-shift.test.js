'use strict';

const shiftArray=require('./array-shift.js');
const faker=require('faker');


const fakerArr = faker.random.arrayElement();

describe('Shift', () =>{
  it('inserts the value at the mid point of the array for even number indexes', () =>{
    let result = shiftArray.insertShiftArray([1,2], 'x');
    expect(result).toEqual([1,'x', 2]);
  });

  it('inserts the value at the mid point of the array for odd number indexes', () =>{
    let result = shiftArray.insertShiftArray([1,2, 3], 'x');
    expect(result).toEqual([1, 2, 'x', 3]);
  });

  it('checks that arity is 2, otherwise null', () => {
    let result = shiftArray.insertShiftArray([1,2]);
    expect(result).toEqual(null);
  });

  it('if no arguments provided, returns null', () =>{
    let result = shiftArray.insertShiftArray();
    expect(result).toEqual(null);
  });

  it('if the first argument is not an array, return null', () => {
    let result = shiftArray.insertShiftArray('x', 'z');
    expect(result).toBeNull();
  });
  
});