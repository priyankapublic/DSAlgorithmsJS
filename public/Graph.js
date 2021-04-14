class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    console.log(v1, v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(start) {
    const result = [];
    const visited = [];
    const adjacencyList = this.adjacencyList;
    (function dfsG(start) {
      visited[start] = true;
      result.push(start);
      adjacencyList[start].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfsG(neighbor);
        }
      });
    })(start);

    return result;
  }

  dfs2(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
console.log(g);
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g);
g.removeVertex("Los Angeles");
console.log(g);
console.log(g.dfs("Tokyo"));
console.log(g.dfs2("Tokyo"));
console.log(g.bfs("Tokyo"));

g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.bfs("A"));

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
}

let wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 1);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);

wg.addEdge("B", "E", 3);
wg.addEdge("E", "F", 1);

console.log(wg);

function isCyclicUtil(v, visited, recStack, adj) {
  console.log(visited, recStack);
  if (visited[v] === false) {
    // Mark the current node as visited and part of recursion stack
    visited[v] = true;
    recStack[v] = true;
    if (adj[v]) {
      adj[v].forEach((neighbor, index) => {
        if (
          !visited[neighbor] &&
          isCyclicUtil(neighbor, visited, recStack, adj)
        )
          return true;
        else if (recStack[neighbor]) return true;
      });
    }
  }
  recStack[v] = false; // remove the vertex from recursion stack
  return false;
}
var V = 5;
var adj = [[4], [2, 4], [3], [4]];
var visited = [];
var recStack = [];
for (let i = 0; i < V; i++) {
  visited[i] = false;
  recStack[i] = false;
}
console.log(visited);

for (let i = 0; i < adj.length; i++) {
  if (isCyclicUtil(i, visited, recStack, adj)) console.log("YES");
}

function isPossible(prerequisites, n, p) {
  var g = new Graph();

  for (let i = 0; i < n; i++) {
    g.addVertex(i);
  }
  for (let i = 0; i < p; i++) {
    if (!g.adjacencyList[prerequisites[i][0]].length)
      g.addEdge(prerequisites[i][0], prerequisites[i][1]);
  }

  var visited1 = [];
  var recStack = [];
  for (let i = 0; i < n; i++) {
    visited1[i] = false;
    recStack[i] = false;
  }
  console.log(visited1);
  // Call the recursive helper function to detect cycle in different
  // DFS trees
  Object.keys(g.adjacencyList).forEach((i) => {
    if (isCyclicUtil(i, visited1, recStack, g)) return "No";
  });

  return "Yes";
}
var arr = [
  [1, 0],
  [0, 1]
];
//console.log(isPossible(arr, 2, 2));

function orangesRotting(grid) {
  var unittime = 2;

  var changed = false;
  while (true) {
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        //if (!visited[count])
        if (grid[i][j] === unittime) {
          var x = [-1, 1, 0, 0];
          var y = [0, 0, -1, 1];

          // visited[count] = true;
          for (var k = 0; k < 4; k++) {
            if (
              i + x[k] >= 0 &&
              j + y[k] >= 0 &&
              i + x[k] < grid.length &&
              j + y[k] < row.length
            ) {
              if (grid[i + x[k]][j + y[k]] === 1) {
                grid[i + x[k]][j + y[k]] = grid[i][j] + 1;
                changed = true;
              }
            }
          }
        }
      }
    }
    if (!changed) break;
    changed = false;
    unittime++;
  }

  for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
    for (var j = 0; j < row.length; j++) {
      // if any orange is found to be
      // not rotten then ans is not possible
      if (grid[i][j] == 1) return -1;
    }
  }

  // Because initial value for a rotten
  // orange was 2
  return unittime - 2;
}

console.log(
  orangesRotting([
    [0, 1, 2],
    [0, 1, 2],
    [2, 1, 1]
  ])
);
console.log(orangesRotting([[2, 2, 0, 1]]));
