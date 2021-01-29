function log(msg) {
  console.log(msg);
}

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

//maxSubArray Solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
log("maxSubarraySum=" + maxSubarraySum([1, 2, 3, 3, 7], 2));

//minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
log("minSubArrayLen=" + minSubArrayLen([1, 2, 3, 3, 7], 8));

//findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
log("findLongestSubstring=" + findLongestSubstring("thisisawesome"));
