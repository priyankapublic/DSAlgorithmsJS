function validAnagrams(str1, str2) {
  const chars1 = str1.split("");
  const chars2 = str2.split("");
  const f1 = {};
  const f2 = {};

  if (str1.length !== str2.length) {
    return `${str1}, ${str2} :` + false;
  }

  for (let i in chars1) {
    f1[chars1[i]] = (f1[chars1[i]] || 0) + 1;
  }

  for (let j in chars2) {
    f2[chars2[j]] = (f2[chars2[j]] || 0) + 1;
  }

  for (let i in chars1) {
    if (f1[chars1[i]] !== f2[chars1[i]]) {
      return `${str1}, ${str2} :` + false;
    }
  }
  return `${str1}, ${str2} :` + true;
}

function validAnagrams2(str1, str2) {
  const chars1 = str1.split("");
  const chars2 = str2.split("");
  const f1 = {};

  if (str1.length !== str2.length) {
    return `${str1}, ${str2} :` + false;
  }

  for (let i in chars1) {
    f1[chars1[i]] = (f1[chars1[i]] || 0) + 1;
  }

  for (let j in chars2) {
    if (!f1[chars2[j]]) {
      return `${str1}, ${str2} :` + false;
    } else {
      f1[chars2[j]]--;
    }
  }
  return `${str1}, ${str2} :` + true;
}
console.log(validAnagrams2("", ""));
console.log(validAnagrams("", ""));

console.log(validAnagrams2("iceman", "cinema"));
console.log(validAnagrams("iceman", "cinema"));

console.log(validAnagrams2("rat", "tar"));
console.log(validAnagrams("rat", "tar"));

console.log(validAnagrams2("zszaaabb", "bbzszaaa"));
console.log(validAnagrams("zszaaabb", "bbzszaaa"));

console.log(validAnagrams2("car", "atr"));
console.log(validAnagrams("car", "atr"));

console.log(validAnagrams2("car", "acr"));
console.log(validAnagrams("car", "acr"));
