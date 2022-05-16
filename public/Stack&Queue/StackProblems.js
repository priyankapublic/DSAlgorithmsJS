// { Driver Code Starts
//Initial Template for javascript

"use strict";

let inputString = "";
let currentLine = 0;

class MyStack {
  constructor() {
    this.arr = new Array(1000);
    this.top = -1;
  }
  push(x) {}
  pop() {}
  getMin() {}
}

function main() {
  let t =
    "2 1 16 3 2 2 1 50 2 3 2 3 2 3 2 1 27 2 2 3 3 1 30 3 3 3 2 2 2 3 1 23 1 70 1 94 2 2 2 1 74";

  let input_line = t.split(" ");
  console.log(input_line);
  let s = "";
  let st = new MyStack();
  let Q = input_line.length;
  let i = 0;
  while (Q > 0) {
    let QueryType = parseInt(input_line[i++]);
    if (QueryType === 1) {
      let val = parseInt(input_line[i++]);
      st.push(val);
    } else if (QueryType === 2) {
      s += st.pop();
      s += " ";
    } else {
      s += st.getMin();
      s += " ";
    }
    Q--;
  }

  console.log(s);
}

// } Driver Code Ends

//User function Template for javascript

// //structure of MyStack
// class MyStack
// {
//     constructor(){
//         this.arr = new Array(1000);
//         this.top=-1;
//     }
//     push(x){

//     }
//     pop(){

//     }
//     getMin(){

//     }
// }

/**
 * @param {number} x
 */
/* The method push to push element into the stack */
MyStack.prototype.push = function (x) {
  this.top++;
  this.arr[this.top] = x;
};

/**
 * @returns {number}
 */
/*The method pop which return the element 
  poped out of the stack*/
MyStack.prototype.pop = function () {
  if (this.arr[this.top]) {
    var top = this.arr[this.top];
    this.top = this.top - 1;
    return top;
  } else {
    return -1;
  }
};
/**
 * @returns {number}
 */
/*The method getMin() which return the minimum
element of the stack*/
MyStack.prototype.getMin = function () {
  // code here
  var min = this.arr[this.top];
  //console.log(this.arr)
  for (let i = this.top; i >= 0; i--) {
    if (min > this.arr[i]) {
      min = this.arr[i];
    }
  }
  return min || -1;
};
main();
