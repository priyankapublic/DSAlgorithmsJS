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
  const f1 = {};

  if (str1.length !== str2.length) {
    return `${str1}, ${str2} :` + false;
  }

  for (let i = 0; i < str1.length; i++) {
    f1[str1[i]] = (f1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!f1[str2[j]]) {
      return `${str1}, ${str2} :` + false;
    } else {
      f1[str2[j]]--;
    }
  }
  return `${str1}, ${str2} :` + true;
}
const t1 = performance.now();

console.log(validAnagrams2("aabbccddee", "eeddccbbaa"));
const t2 = performance.now();
console.log(t2 - t1);

const t3 = performance.now();

console.log(validAnagrams("aabbccddee", "eeddccbbaa"));
const t4 = performance.now();
console.log(t4 - t3);
