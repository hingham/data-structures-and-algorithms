'use strict';
const util = require('util');
let lj = require('../left-join.js');


describe('Left Join', ()=>{
  it('return the correct results, as a matrix, or array of arrays', () =>{
    let result = lj.leftJoin(lj.h1, lj.h2);
    expect(typeof(result)).toEqual('object');
    expect(typeof(result)[0]).toEqual('object');
    expect(result).toEqual([ [ 'pale', 'fair', 'tan' ],
      [ 'love', 'adores', 'hate' ],
      [ 'fun', 'joyous', null ] ]);

  });

});