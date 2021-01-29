// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));

function naiveString(ls, ss) {
  let count = 0;
  let i = 0;
  let j = 0;
  for (i = 0; i < ls.length; i++) {
    for (j = 0; j < ss.length; j++) if (ls[i + j] !== ss[j]) break;
    if (j === ss.length) count++;
  }

  return count;
}

console.log(naiveString("wozomgwozomg", "omg"));
