const merge = require('../merge-sort.js');

describe('merge sort', ()=>{
    let unsorted = [1, 6, 6, 3, 2];
    let sorted = merge.mergeSort(unsorted);
    it('sorts an array of integers', () =>{
        expect(sorted).toEqual([1, 2, 3, 6, 6]);
    });

    it('does not change the origin array', () =>{
        expect(unsorted).toEqual([1, 6, 6, 3, 2]);
    });

    it('retains all values, including duplicates', () =>{
        let bool = true;
       for(let i = 0; i< unsorted.length; i++){
           if(!unsorted.includes(sorted[i])){
               return bool = false;
           }
       }
       expect(bool).toBe(true);
       expect(sorted.length).toEqual(unsorted.length);
    });
})