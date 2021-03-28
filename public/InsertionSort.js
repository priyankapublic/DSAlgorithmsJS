let insertionSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const min = inputArr[i];
    while (j >= 0 && inputArr[j] > min) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = min;
  }
  return inputArr;
};
console.log("Insertion sort:", insertionSort([4, 6, 1, 3, 11, 0, -2, 2]));
