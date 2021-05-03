// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/

class Node {
    constructor(value) {
      this.value = value;
      this.adjacents = []; // adjacency list
    }

    printNode() {
        console.log(`Node: ${this.value}, adjacents:`, this.adjacents.map(node => node.value))
    }

    addAdjacent(node) {
      this.adjacents.push(node);
    }

    removeAdjacent(node) {
      const index = this.adjacents.indexOf(node);
      if (index > -1) {
        this.adjacents.splice(index, 1);
        return node;
      }
    }

    getAdjacents() {
      return this.adjacents;
    }

    isAdjacent(node) {
      return this.adjacents.indexOf(node) > -1;
    }
}

class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
      this.nodes = new Map();
      this.edgeDirection = edgeDirection;
    }

    print() {
        for (let [_, node] of this.nodes) {
            node.printNode();
        }
    }

    addVertex(value) {
        if(this.nodes.has(value)) {
          return this.nodes.get(value);
        } else {
          const vertex = new Node(value);
          this.nodes.set(value, vertex);
          return vertex;
        }
    }

    addEdge(source, destination) { // sourceNode, destinationNode
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);

        if(this.edgeDirection === Graph.UNDIRECTED) {
          destinationNode.addAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];
    }

    removeVertex(value) {
        const current = this.nodes.get(value);
        if(current) {
          for (const node of this.nodes.values()) {
            node.removeAdjacent(current);
          }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if(sourceNode && destinationNode) {
          sourceNode.removeAdjacent(destinationNode);

          if(this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.removeAdjacent(sourceNode);
          }
        }

        return [sourceNode, destinationNode];
    }
}

Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges <->
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges ->


module.exports = Graph;


const g = new Graph(Graph.UNDIRECTED);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(1,2);
g.addEdge(2,3);

g.print()