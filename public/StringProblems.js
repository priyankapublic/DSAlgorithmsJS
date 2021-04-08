function largestNumber(n, sum) {
  var digits = "";
  var res = sum;
  for (let i = n - 1; i >= 0; i--) {
    var digit = 0;
    if (res !== 0) {
      digit = res > 9 ? 9 : res;
      res = res - digit;
    }
    digits += digit;
  }

  if (res === 0) {
    return digits;
  } else {
    return -1;
  }
}

console.log(largestNumber(1, 44));

function strstr(s, x) {
  let i = 0,
    j = 0,
    firstOccurenceFound = false;
  let startIndex = -1;
  while (i < s.length && j < x.length) {
    console.log(s[i], x[j], i);
    if (s[i] === x[j]) {
      if (startIndex == -1 && !firstOccurenceFound) {
        startIndex = i;
      }
      firstOccurenceFound = true;
      j++;
    } else {
      startIndex = -1;
      firstOccurenceFound = false;
      j = 0;
    }
    i++;
  }
  return j === x.length ? startIndex : -1;
}

console.log(strstr("ccdeecbdfedcbabfdfaebdaf", "fecfacbccfe"));

function convertToRoman(number) {
  // Base symbols are added index 'i'.
  function sub_digit(num1, num2, i, str) {
    str[i++] = num1;
    str[i++] = num2;
    return i;
  }

  // To add symbol 'ch' n times after index i in c[]
  function digit(ch, n, i, c) {
    for (var j = 0; j < n; j++) {
      c[i++] = ch;
    }
    return i;
  }

  var map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  var c = [];
  var i = 0;
  // TO convert decimal number to roman numerals
  while (number !== 0) {
    // If base value of number is greater than 1000
    if (number >= 1000) {
      // Add 'M' number/1000 times after index i
      i = digit("M", Math.floor(number / 1000), i, c);
      number = number % 1000;
    } // If base value of number is greater than or
    // equal to 500
    else if (number >= 500) {
      // To add base symbol to the character array
      if (number < 900) {
        // Add 'D' number/1000 times after index i
        i = digit("D", Math.floor(number / 500), i, c);
        number = number % 500;
      } // To handle subtractive notation in case of number
      // having digit as 9 and adding corresponding base
      // symbol
      else {
        // Add C and M after index i/.
        i = sub_digit("C", "M", i, c);
        number = number % 100;
      }
    } // If base value of number is greater than or equal to 100
    else if (number >= 100) {
      // To add base symbol to the character array
      if (number < 400) {
        i = digit("C", Math.floor(number / 100), i, c);
        number = number % 100;
      } // To handle subtractive notation in case of number
      // having digit as 4 and adding corresponding base
      // symbol
      else {
        i = sub_digit("C", "D", i, c);
        number = number % 100;
      }
    } // If base value of number is greater than or equal to 50
    else if (number >= 50) {
      // To add base symbol to the character array
      if (number < 90) {
        i = digit("L", Math.floor(number / 50), i, c);
        number = number % 50;
      } // To handle subtractive notation in case of number
      // having digit as 9 and adding corresponding base
      // symbol
      else {
        i = sub_digit("X", "C", i, c);
        number = number % 10;
      }
    } // If base value of number is greater than or equal to 10
    else if (number >= 10) {
      // To add base symbol to the character array
      if (number < 40) {
        i = digit("X", Math.floor(number / 10), i, c);
        number = number % 10;
      } // To handle subtractive notation in case of
      // number having digit as 4 and adding
      // corresponding base symbol
      else {
        i = sub_digit("X", "L", i, c);
        number = number % 10;
      }
    } // If base value of number is greater than or equal to 5
    else if (number >= 5) {
      if (number < 9) {
        i = digit("V", Math.floor(number / 5), i, c);
        number = number % 5;
      } // To handle subtractive notation in case of number
      // having digit as 9 and adding corresponding base
      // symbol
      else {
        i = sub_digit("I", "X", i, c);
        number = 0;
      }
    } // If base value of number is greater than or equal to 1
    else if (number >= 1) {
      if (number < 4) {
        i = digit("I", number, i, c);
        number = 0;
      } // To handle subtractive notation in case of
      // number having digit as 4 and adding corresponding
      // base symbol
      else {
        i = sub_digit("I", "V", i, c);
        number = 0;
      }
    }
  }
  return c.join("");
}

console.log(convertToRoman(23));
