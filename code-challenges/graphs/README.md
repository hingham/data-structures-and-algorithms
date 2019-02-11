# Graphs
Graphs are a datastructure that connects nodes with multiple neighbors, or relations, in a non-direction or direction connections.

## Challenge
Create a graph class with the following methods: 
* AddNode(), Efficiency:  O(1)
  * Adds a new node to the graph
  * Takes in the value of that node
  * Returns the added node
* AddEdge() Efficiency: O(1)
  * Adds a new edge between two nodes in the graph
  * Include the ability to have a “weight”
  * Takes in the two nodes to be connected by the edge
  * Both nodes should already be in the Graph
* GetNodes()
  *Returns all of the nodes in the graph as a collection (set, list, or similar)
* GetNeighbors() Efficiency: O(1)
  *Returns a collection of nodes connected to the given node
  *Takes in a given node
  * Include the weight of the connection in the returned collection
* Size() Efficiency: O(1)
  * Returns the total number of nodes in the graph

## Approach & Efficiency