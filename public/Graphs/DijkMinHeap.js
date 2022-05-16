class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
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
