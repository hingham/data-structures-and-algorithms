'use strict';
const util = require('util');
let repeatedWords = require('../repeated-word.js');


describe('repeated words', ()=>{
  it('return the a string, which is the first repeated word', () =>{
    let strWithRepeat = 'This is cool because is';
    let result = repeatedWords(strWithRepeat);
    expect(typeof(result)).toEqual('string');
    expect(result).toEqual('is');
  });

  it('return null if no repeated word found', () =>{
    let result = repeatedWords('This is the Coolest thing.');
    
    expect(result).toBe(null);
  });
});