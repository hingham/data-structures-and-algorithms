'use strict';

// const graph = require('../graph.js');


describe('breadth firsth', () =>{

  describe('it is alive', () =>{
    it('is alive', () =>{
      expect(true).toBe(true)
  });
});

  // let myGraph = new graph.Graph()
  // let breadth = yGraph.breadthFirst(graph.nick);

  xit('returns an array of all the nodes', () =>{
    expect(breadth).toEqual([{ value: 'nick' },
      { value: 'hannah' },
      { value: 'dog' },
      { value: 'cat' },
      { value: 'owl' },
      { value: 'ben' } ]);
  });

  xit('no nodes are repeated', () =>{
    let bool = true;
    breadth.forEach((node, idx) =>{
      if(breadth.includes(node)){
        return false;
      }
    });
    expect(bool).toBe(true);
        
  });

  xit('returns the start node as the index 0 of array', () =>{
    expect(breadth[0]).toEqual({value: 'nick'});
  });
});