import bubbleSort from "./BubbleSort";

function convertToWave(arr, n) {
  //console.log(arr)
  for (let i = 0; i < arr.length - 1; i = i + 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

console.log(
  convertToWave([672, 2619, 2763, 3895, 4041, 4732, 5900, 8794, 9496])
);

function findMax(arr, n) {
  // Code here

  var max = 0;
  for (let i = 0; i < n; i++) {
    const height = arr[i].feet * 12 + arr[i].inches;
    if (height > max) {
      max = height;
    }
  }
  return max;
}

console.log(
  findMax(
    [
      { feet: 2, inches: 1 },
      { feet: 1, inches: 2 }
    ],
    2
  )
);

function sort012(arr, N) {
  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  var lo = 0;
  var hi = N - 1;
  var mid = 0;

  // Iterate till all the elements
  // are sorted
  while (mid <= hi) {
    switch (arr[mid]) {
      // If the element is 0
      case 0:
        swap(arr, lo++, mid++);
        break;

      // If the element is 1 .
      case 1:
        mid++;
        break;

      // If the element is 2
      case 2:
        swap(arr, mid, hi--);
        break;
      default:
    }
  }
  return arr;
}
console.log("sorted", sort012([0, 1, 2, 2, 0, 0], 6));

function rotateByD(arr, d, n) {
  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  /* To handle if d >= n */
  d = d % n;
  var g_c_d = gcd(d, n);

  for (var i = 0; i < g_c_d; i++) {
    /* move i-th values of blocks */
    var temp = arr[i];
    var j = i;

    while (1) {
      var k = j + d;
      if (k >= n) k = k - n;

      if (k == i) break;

      arr[j] = arr[k];

      j = k;
    }
    arr[j] = temp;
  }
  return arr;
}
console.log(rotateByD([1, 2, 3, 4, 5], 2, 5));
function kthSmallest(arr, l, r, k) {
  let min = arr[0];
  for (let j = 0; j < k; j++) {
    let minJ = arr[0];
    for (let i = 0; i < r; i++) {
      if (arr[i] < minJ && arr[i] > min) {
        minJ = arr[i];
      }
    }

    console.log(minJ);
    min = minJ;
  }
  return min;
}

console.log(kthSmallest([7, 10, 4, 20, 15], 5, 4, 3));

function makeProductOne(arr, n) {
  var total = 0;
  var zero = 0,
    neg = 0;
  for (let i = 0; i < n; i++) {
    let e = arr[i];
    let minStep = 0;
    if (e === 0) {
      zero++;
    } else if (e < 0) {
      neg++;
      minStep = -1 - e;
      total += minStep;
    } else {
      minStep = e - 1;
      total += minStep;
      console.log(minStep, total);
    }
  }
  if (neg % 2 === 0) {
    total += zero;
  } else {
    if (zero > 0) {
      total += zero;
    } else {
      total += 2;
    }
  }
  return total;
}
console.log("makeProductOne:", makeProductOne([1, 1], 2));

function reArrange(arr, n) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var oddInd = 1;
  var evenInd = 0;
  var count = 0;
  while (true) {
    while (evenInd < n && arr[evenInd] % 2 == 0) evenInd += 2;

    while (oddInd < n && arr[oddInd] % 2 == 1) oddInd += 2;

    if (evenInd < n && oddInd < n) {
      swap(arr, evenInd, oddInd);
      count++;
    } else break;
  }
  return count;
}

console.log(reArrange([9, 3, 8, 8], 4));

function firstAndLast(arr, N, X) {
  let l = 0,
    r = N - 1;
  let leftFound = false;
  let rightFound = false;
  let indices = [];
  while (l < N && r >= 0) {
    if (arr[l] === X && !leftFound) {
      indices[0] = l;
      leftFound = true;
    }
    if (arr[r] === X && !rightFound) {
      indices[1] = r;
      rightFound = true;
    }
    l++;
    r--;
  }
  if (leftFound && rightFound) {
    return indices;
  } else {
    return [-1];
  }
}

console.log(firstAndLast([0, 0, 1, 1, 2], 5, 1));

function increment(arr, n) {
  var carry = 0;
  var array = [];

  // Add 1 to the last digit and find carry
  array[n - 1] = arr[n - 1];
  array[n - 1] += 1;
  carry = array[n - 1] / 10;
  array[n - 1] = array[n - 1] % 10;

  // Traverse from second last digit
  for (var i = n - 2; i >= 0; i--) {
    if (carry == 1) {
      array[i] = arr[i] + 1;
      carry = array[i] / 10;
      array[i] = array[i] % 10;
    } else {
      array[i] = arr[i];
    }
  }

  // If the carry is 1, we need to add
  // a 1 at the beginning of the array
  if (carry == 1) {
    array.unshift(carry);
  }
  return array;
}

console.log("increment:", increment([1, 2, 3], 3));
console.log("increment:", increment([6, 8, 9], 3));
console.log("increment:", increment([9, 9, 9], 3));

function find3Numbers(A, n, X) {
  //Complexity Worst & Avergae O(n^2)
  //Best O(n)
  A = bubbleSort(A);
  var j, k;
  for (var i = 0; i < n - 2; i++) {
    // To find the other two elements, start two index
    // variables from two corners of the array and move
    // them toward each other
    j = i + 1; // index of the first element in the
    // remaining elements

    k = n - 1; // index of the last element
    while (j < k) {
      if (A[i] + A[j] + A[k] === X) {
        return [A[i], A[j], A[k]];
      } else if (A[i] + A[j] + A[k] > X) {
        k--;
      } else {
        j++;
      }
    }
  }
  return "Not found";
}

console.log("Triplets are:", find3Numbers([1, 4, 8, 16, 32, 2], 6, 19));

console.log("Triplets are:", find3Numbers([1, 4, 8, 16, 32, 2], 6, 29));

function topK(a, k) {
  // code here

  var map = {};
  var freq = [];
  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = {
        value: a[i],
        frequency: 0
      };
    }
    map[a[i]].frequency++;
  }

  var arr = [];
  for (let i = 0; i < Object.keys(map).length; i++) {
    arr.push(map[Object.keys(map)[i]]);
  }
  arr = arr.sort(function (a, b) {
    return a.value > b.value && a.frequency >= b.frequency ? -1 : 1;
  });

  // arr = arr.sort(function (a, b) {
  //   return a.frequency > b.frequency ? -1 : 1;
  // });

  console.log(arr);
  for (let i = 0; i < k; i++) {
    freq.push(arr[i].value);
  }
  return freq;
}

console.log("Topk:", topK([1, 1, 2, 2, 3, 3, 3, 4], 2));

function minSwaps(arr) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var ans = 0;
  var N = arr.length;
  var temp = [...arr];
  console.log(temp);
  temp = bubbleSort(temp);
  var h = {};
  for (var i = 0; i < N; i++) {
    h[arr[i]] = i;
  }
  for (var i = 0; i < N; i++) {
    if (arr[i] != temp[i]) {
      ans++;
      var init = arr[i];

      // If not, swap this element
      // with the index of the
      // element which should come here
      swap(arr, i, h[temp[i]]);

      // Update the indexes in
      // the hashmap accordingly
      h[init] = h[temp[i]];
      h[temp[i]] = i;
    }
  }
  return ans;
}
console.log("minSwaps:", minSwaps([7, 1, 14, 17, 6, 9, 5, 3, 18]));
