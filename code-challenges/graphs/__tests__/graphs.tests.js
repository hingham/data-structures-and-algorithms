const graph = require('../graph.js');

describe('graphs', () =>{

  let bunny = graph.myGraph.addNode('bunny');
  let mouse = graph.myGraph.addNode('mouse');
  graph.myGraph.addEdge(bunny, mouse);
  describe('add', () =>{
    it('add a node to the graph', () =>{
      let oldSize =graph.myGraph.nodes;
      let snow = graph.myGraph.addNode('snow');
      expect(graph.myGraph.adjacencyList.has(snow)).toBe(true);
      expect(graph.myGraph.nodes).toEqual(oldSize + 1);
    });
  });

  describe('AddEdge', () =>{
    it('adds an edge to the graph', () =>{
     
      let nArr = graph.myGraph.getNeighbors(bunny);
      expect(nArr[0].node.value).toEqual('mouse');
      nArr = graph.myGraph.getNeighbors(mouse);
      expect(nArr[0].node.value).toEqual('bunny');
    });
  });

  describe('GetNodes', () =>{
    it('returns the adjacency list', () =>{
      let allNodes = graph.myGraph.adjacencyList.keys();
      let mapSize = graph.myGraph.adjacencyList.size;
      expect(graph.myGraph.getNodes()).toEqual(allNodes);
    });
  });

  describe('GetNeighbors', () =>{
    it('returns all neighbors of a node as an array', () =>{
      let neighbors = graph.myGraph.getNeighbors(bunny);
      expect(typeof(neighbors)).toEqual('object');
      expect(neighbors).toEqual([{'node': {'value': 'mouse'},'weight': 0}]
      );
    });
  });

  describe('Size', () =>{
    it('returns the size of the graph', () =>{
      let oldSize = graph.myGraph.size();
      expect(oldSize).toEqual(9);
    }); 
    it('increments size by one when new node is added', () =>{
      let millie = graph.myGraph.addNode('millie');
      expect(graph.myGraph.size()).toEqual(10);
    }); 
  });
});