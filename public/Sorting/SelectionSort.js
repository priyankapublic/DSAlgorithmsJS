let selectionSort = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    var min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    var temp = a[min];
    a[min] = a[i];
    a[i] = temp;
  }
  return a;
};

console.log(selectionSort([
  1,
  2,
  3,
  4,
  3,
  1,
  7,
  7,
  2,
  11,
  6
]));
