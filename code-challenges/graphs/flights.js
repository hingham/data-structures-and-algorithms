let Graph = require('./graph.js');
console.log(Graph);

let myGraph = new Graph();
let boston = myGraph.addNode('boston');
let portland = myGraph.addNode('portland');
let seattle = myGraph.addNode('seattle');
let la = myGraph.addNode('la');
let sf = myGraph.addNode('sf');
let ny = myGraph.addNode('ny');

myGraph.addEdge(ny, la, 100);
myGraph.addEdge(la, sf, 50);
myGraph.addEdge(sf, seattle, 50);
myGraph.addEdge(seattle, portland, 25);
myGraph.addEdge(seattle, la, 75);
myGraph.addEdge(seattle, ny, 150);
myGraph.addEdge(ny, boston, 50);

console.log('adjacency list', myGraph.adjacencyList);



function getFlights(arr, graph){
  let cost = 0;
  let node;
  let n;
  for(let i = 0; i<arr.length - 1; i++){
    let n = graph.getNeighbors(arr[i]);

    for( let j = 0; j<n.length ; j++){
      if(n[j].node.value === arr[i+1]){
        console.log('node weight', n[j].weight);
        cost = cost + n[j].weight;
        console.log('found it in the array');
        break;
      }
      else{
        console.log('returned false');
        return false;
      }
    }
  }
  console.log('final cost ', cost);
  return cost;
}

getFlights(['boston', 'ny', 'portland'], myGraph);