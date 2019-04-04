'use strict';

const graph = require('../graph.js');


describe('breadth firsth', () =>{

  let breadth = graph.myGraph.breadthFirst(graph.nick);

  it('returns an array of all the nodes', () =>{
    expect(breadth).toEqual([{ value: 'nick' },
      { value: 'hannah' },
      { value: 'dog' },
      { value: 'cat' },
      { value: 'owl' },
      { value: 'ben' } ]);
  });

  it('no nodes are repeated', () =>{
    let bool = true;
    breadth.forEach((node, idx) =>{
      if(breadth.includes(node)){
        return false;
      }
    });
    expect(bool).toBe(true);
        
  });

  it('returns the start node as the index 0 of array', () =>{
    expect(breadth[0]).toEqual({value: 'nick'});
  });
});