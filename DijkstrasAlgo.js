class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, end) {
    const pq = new PriorityQueue();
    const distances = {};
    const previousDistance = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previousDistance[vertex] = null;
    }

    let smallest;
    let path = [];
    while (pq.values.length) {
      smallest = pq.dequeue().val;
      if (smallest === end) {
        while (previousDistance[smallest]) {
          path.push(smallest);
          smallest = previousDistance[smallest];
        }
        break;
      }
      if (distances[smallest] !== Infinity || smallest) {
        this.adjacencyList[smallest].forEach((item) => {
          let cand = distances[smallest] + item.weight;
          if (distances[item.node] > cand) {
            distances[item.node] = cand;
            previousDistance[item.node] = smallest;
            pq.enqueue(item.node, cand);
          }
        });
      }
    }
    path.push(smallest);
    console.log(path.reverse());
  }
}

let wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");

wg.addEdge("A", "C", 1);
wg.addEdge("A", "B", 1);
wg.addEdge("B", "D", 3);
wg.addEdge("B", "E", 2);
wg.addEdge("D", "E", 4);
wg.addEdge("D", "C", 1);
 

console.log(wg.dijkstra("C", "B"));
