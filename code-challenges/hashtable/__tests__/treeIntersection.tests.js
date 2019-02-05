'use strict';
const util = require('util');
let treeInter = require('../tree-intersection.js');
let tree = require('../../tree/tree.js');

describe('the treeIntersection function', ()=>{
  it('returns the value that are in both trees', ()=>{
    let results = treeInter.treeIntersection(treeInter.t1, treeInter.t2);
    expect(results).toEqual(['6', '5', '15']);
  });
  it('returns an emtpy array if not matches are found', ()=>{
    let results = treeInter.treeIntersection(treeInter.t1, treeInter.t3);
    expect(results).toEqual([]);
  });
  it('returns an array', ()=>{
    let results = treeInter.treeIntersection(treeInter.t1, treeInter.t3);
    expect(typeof(results)).toEqual('object');
  });
});

