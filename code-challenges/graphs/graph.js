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
    this.adjacencyList.set(node, []);
    this.nodes ++;

    return node;
  }
  addEdge(startNode, endNode, weight = 0){
    if(!this.adjacencyList.has(startNode)||
    !this.adjacencyList.has(endNode))
      throw new Error('Error invalid nodes');

    let startAdjacencies = this.adjacencyList.get(startNode);
    startAdjacencies.push({
      node: endNode,
      weight: 0,
    });
    let endAdjacencies = this.adjacencyList.get(endNode);
    endAdjacencies.push({
      node: startNode,
      weight: 0,
    });
  }

  getNodes(){
    return this.adjacencyList.keys();
  }
  
  getNeighbors(node){
    if(!this.adjacencyList.has(node)){
      return null;
    }
    else{
      return this.adjacencyList.get(node);
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
console.log('my neighbors ', myGraph.getNeighbors(hannah));
console.log(myGraph.size());
console.log('breadth first', myGraph.breadthFirst(nick));

console.log('get nodes', myGraph.getNodes()) ;
console.log(myGraph.adjacencyList.size);
module.exports = {myGraph, Graph, nick};