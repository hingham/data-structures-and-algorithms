'use strict';

const binary=require('./array-binary-search.js');


describe('Binary', () =>{
  it('returns -1 if value is not in the array', () =>{
    let result = binary.binarySearch([1,2], 'x');
    expect(result).toEqual(-1);
  });

  it('returns the index if the item is in the array', () =>{
    let result = binary.binarySearch([1, 2, 5, 7], 2);
    expect(result).toEqual(1);
  });

  it('return -1 if it is an empty array', () =>{
      let result = binary.binarySearch([], 3);
      expect(result).toEqual(-1);
  })
    
});
