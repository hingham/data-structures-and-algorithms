'use strict'


class Node{
  constructor(value){
    this.value = value;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
    this.nodes = 0;
  }
  addNode(value){
    let node = new Node(value);
    this.adjacencyList.set(value, []);
    this.nodes ++;
    return node;
  }
  addEdge(startNode, endNode, weight){
    if(!this.adjacencyList.has(startNode.value)||
    !this.adjacencyList.has(endNode.value))
      throw new Error('Error invalid nodes');

    let startAdjacencies = this.adjacencyList.get(startNode.value);
    startAdjacencies.push({
      node: endNode,
      weight: weight,
    });
    let endAdjacencies = this.adjacencyList.get(endNode.value);
    endAdjacencies.push({
      node: startNode,
      weight: weight,
    });
  }

  getNodes(){
    return this.adjacencyList.keys();
  }
  
  getNeighbors(value){
    if(!this.adjacencyList.has(value)){
      return null;
    }
    else{
      return this.adjacencyList.get(value);
    }
  }

  size(){
    return this.nodes;
  }

  breadthFirst(startNode){
    let nodeQ = [startNode];
    let nodeArr = [startNode];
    while(nodeQ.length > 0){
      let node = nodeQ.shift();
      console.log('node', node);

      let nArr = this.getNeighbors(node);
      console.log('neighbors array', nArr);
      for(let i = 0; i< nArr.length; i++){
        if(!nodeArr.includes(nArr[i].node)){
          nodeQ.push(nArr[i].node);
          nodeArr.push(nArr[i].node);
        }
      }
    }
    return nodeArr;
  }

  depthFirst(adjacencyList){
    let entries = adjacencyList.entries();
    let visited = new Set();
    let arr = [];

    const _walk = (node, edges) =>{
      if ( visited.has(node) || (edges.length === 0) ){
        console.log('visited', visited);
        console.log('returned in _walk');
        return;
      }
      visited.add(node);
      arr.push(node);
      // console.log('Node:', edges);

      for(let i = 0; i<edges.length; i++){
        console.log('edges', edges[i].node.value);
        let n = this.adjacencyList.get(edges[i].node.value);
        console.log('n',n);
        _walk(edges[i].node.value, n);
      }
      
      console.log('visited', visited);
      // console.log(visited.has(node));
      // console.log('node', node[1]);

    }
    let first = entries.next().value
    // console.log('first', first);
    _walk(first[0], first[1]);
    console.log('arr', arr);
    return;
  }



}

let myGraph = new Graph();
let hannah = myGraph.addNode('hannah');
let nick = myGraph.addNode('nick');
let dog = myGraph.addNode('dog');
let cat = myGraph.addNode('cat');
let owl = myGraph.addNode('owl');
let ben = myGraph.addNode('ben');

myGraph.addEdge(hannah, nick);
myGraph.addEdge(dog, cat);
myGraph.addEdge(hannah, dog);
myGraph.addEdge(nick, dog);
myGraph.addEdge(nick, cat);
myGraph.addEdge(nick, owl);
myGraph.addEdge(hannah, owl);
myGraph.addEdge(dog, ben);

myGraph.depthFirst(myGraph.adjacencyList);

module.exports = Graph;
