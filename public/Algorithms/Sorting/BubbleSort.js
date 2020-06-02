let bubbleSort = inputArr => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
document.getElementById("BubbleSort").innerHTML = bubbleSort([1, 2, 3, 4]);
//Complexity Worst & Avergae O(n^2)
//Best O(n)
