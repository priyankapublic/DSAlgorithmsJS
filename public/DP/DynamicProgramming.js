var climbStairs = function (n) {
  function climb(n) {
    var f = [];
    f[0] = 0;
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
  }
  return climb(n);
};
document.write('<pre>');
console.log("climbStairs:", climbStairs(4));

var coinchange2 = (arr, sum) => {
  var dp = [1];
  arr.sort(function (x, y) {
    return x - y;
  });
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < sum; j++) {
      if (dp[j]) {
        if (!dp[j + arr[i]]) {
          dp[j + arr[i]] = dp[j];
        } else {
          dp[j + arr[i]] += dp[j];
          dp[j + arr[i]] = dp[j + arr[i]] % 1000007;
        }
      }
    }
  }
  return dp[sum] || 0;
};

const coinchange3 = function (Arr, m) {
  function count(S, m, n) {
    // If n is 0 then there is 1 solution
    // (do not include any coin)
    if (n == 0) return 1;

    // If n is less than 0 then no
    // solution exists
    if (n < 0) return 0;

    // If there are no coins and n
    // is greater than 0, then no
    // solution exist
    if (m <= 0 && n >= 1) return 0;

    // count is sum of solutions (i)
    // including S[m-1] (ii) excluding S[m-1]
    return count(S, m - 1, n) + count(S, m, n - S[m - 1]);
  }
  return count(Arr, Arr.length, m);
};
console.log("Infinite coin change:", coinchange2([1, 2, 3], 4));
console.log("Infinite coin change:", coinchange3([1, 2], 4));
