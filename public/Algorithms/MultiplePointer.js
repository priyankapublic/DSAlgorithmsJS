function sumZero(a) {
  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    const sum = a[i] + a[j];
    if (sum === 0) {
      return `${a[i]}, ${a[j]}`;
    } else if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    }
  }
  return `No pair found`;
}

console.log(sumZero([-9, -3, -2, -1, 0, 1, 3, 5, 6, 7]));

function countUnique(a) {
  if (a.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j < a.length) {
    if (a[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
    j++;
  }
  return i + 1;
}
console.log(countUnique([1, 2, 4, 5, 6, 7, 8, 8, 8]));

console.log(countUnique([1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5]));
console.log(countUnique([]));
function power(number, exp) {
  if (exp === 0) return 1;
  exp--;
  return number * power(number, exp);
}

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 5));
