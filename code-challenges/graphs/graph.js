let myMap = new Map();
myMap.set('hannah', 'nick');
myMap.set('snow', 'rain');
console.log(myMap);


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
    this.nodes ++;
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
      nArr.forEach((edge)=>{
        if(!nodeArr.includes(edge.node)){
          nodeQ.push(edge.node);
          nodeArr.push(edge.node);
        }
      });
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