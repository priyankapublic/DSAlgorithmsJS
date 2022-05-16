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
  