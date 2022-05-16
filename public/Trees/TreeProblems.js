import bubbleSort from "./BubbleSort";

function calculateHeight(node) {
  if (!node) return 0;
  else {
    // Compute the depth of each subtree
    var lDepth = calculateHeight(node.left);
    var rDepth = calculateHeight(node.right);

    // Use the larger one
    if (lDepth > rDepth) return lDepth + 1;
    else return rDepth + 1;
  }
}

var reachedHeight = 0;

function printGivenLevel(root, level) {
  console.log(root, level);

  if (root === null) return;
  if (level == 1) console.log(root.data);
  else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
}

function reverseLevelOrder(root) {
  //code here
  var height = calculateHeight(root);
  for (i = height; i >= 0; i--) {
    printGivenLevel(root, i);
  }
}

function isNodePresent(key, root) {
  console.log();
  if (!root) return;
  if (root.data === key) {
    return true;
  }
  /* then recur on left sutree */
  var res1 = isNodePresent(root.left, isNodePresent);
  // node found, no need to look further
  if (res1) return true;

  /* node is not found in left,
  so recur on right subtree */
  var res2 = isNodePresent(root.right, isNodePresent);

  return res2;
}

function isPairPresent(root, target) {
  console.log(target - root.data);
  if (!root) {
    return;
  }
  if (this.isNodePresent(target - root.data, root)) return true;
  var res1 = this.isPairPresent(root.left, target - root.data);
  if (res1) return true;

  /* node is not found in left,
  so recur on right subtree */
  var res2 = this.isPairPresent(root.right, target - root.data);
  return res2;
}

var root = {
  data: 10,
  left: {
    data: 20,
    left: null,
    right: null
  },
  right: {
    data: 30,
    left: {
      data: 40,
      left: null,
      right: null
    },
    right: {
      data: 60,
      left: null,
      right: null
    }
  }
};

//reverseLevelOrder(root)
//console.log(isPairPresent(root, 5100));
var data = [];
function levelOrder(node) {
  function printGivenLevel(root, level, presentLevel) {
    if (root === null) return;
    if (level === 1) {
      if (data[presentLevel - 1]) {
        data[presentLevel - 1].push(root.data);
      } else {
        data[presentLevel - 1] = [root.data];
      }
    } else if (level > 1) {
      printGivenLevel(root.left, level - 1, presentLevel);
      printGivenLevel(root.right, level - 1, presentLevel);
    }
  }
  var height = calculateHeight(node);
  for (let i = 1; i <= height; i++) {
    printGivenLevel(node, i, i);
  }
}

levelOrder(root);
function diameter(root) {
  if (!root) return 0;
  var lHt = calculateHeight(root.left);
  var rHt = calculateHeight(root.right);

  var lDt = diameter(root.left);
  var rDt = diameter(root.left);
  return Math.max(lHt + rHt + 1, Math.max(lDt, rDt));
}
console.log(diameter(root));

function isBalanced(root) {
  function calculateHeight(node) {
    if (!node) return 0;
    else {
      // Compute the depth of each subtree
      var lDepth = calculateHeight(node.left);
      var rDepth = calculateHeight(node.right);

      // Use the larger one
      if (lDepth > rDepth) return lDepth + 1;
      else return rDepth + 1;
    }
  }
  if (!root) return 1;
  var lh = calculateHeight(root.left);
  var rh = calculateHeight(root.right);
  if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right))
    return 1;

  /* If we reach here then 
tree is not height-balanced */
  return 0;
}

console.log(isBalanced(root));
