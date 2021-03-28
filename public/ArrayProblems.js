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
