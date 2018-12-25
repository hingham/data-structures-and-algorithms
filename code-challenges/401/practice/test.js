'use strict'
cd ..
const adder = require('../add.js');
console.log({adder});

describe('adder module', () =>{

    it('requires numberic input', () => {
        let expected = null;
        let sum = adder.add ('word', 3);
        expect(sum).toEqual(expected);
    })

    it('defaults inputs to zero' ()=>{
        let expected = 1;
        let sume = adder.add(1);
        expect(sum).toEqual(expected);
    });

    it ('defaults inputs to zero when no numbers are sent', ()=>{
        let expected = 0;
        let sum = adder.add();
        expect(sum).toEqual(expected);

    })
    
    //Happy Path

    it('can add 2 numbers', () =>{
        let expected = 2;
        let sum = adder.add(1,1);
        expect(sum).toEqual(expected);
    )};


)}