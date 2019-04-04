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
        return;
      }

      visited.add(node);
      console.log('\n', 'visited', visited);
      arr.push(node);

      for(let i = 0; i<edges.length; i++){
        console.log('edges', node, edges, edges[i].node.value);
        let n = this.adjacencyList.get(edges[i].node.value);
        _walk(edges[i].node.value, n);
      }

    }
    let first = entries.next().value
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

myGraph.addEdge(hannah, cat);
myGraph.addEdge(cat, dog);
myGraph.addEdge(hannah, nick);
myGraph.addEdge(owl, ben);
myGraph.addEdge(ben, hannah);


myGraph.depthFirst(myGraph.adjacencyList);

module.exports = Graph;
