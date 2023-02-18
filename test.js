
// JavaScript program to print BST in given range

// A binary tree node
class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

// let root = null;

/* A function that constructs Balanced Binary Search Tree 
 from a sorted array */
function sortedArrayToBST(arr, start, end) {
  /* Base Case */
  if (start > end) {
    return null;
  }
  /* Get the middle element and make it root */
  const mid = parseInt((start + end) / 2);
  const node = new Node(arr[mid]);
  /* Recursively construct the left subtree and make it
   left child of root */
  node.left = sortedArrayToBST(arr, start, mid - 1);
  /* Recursively construct the right subtree and make it
   right child of root */
  node.right = sortedArrayToBST(arr, mid + 1, end);
  return node;
}
/* A utility function to print preorder traversal of BST */
function preOrder(node) {
  if (node == null) {
    return;
  }
  console.log(`${node.data} `);
  preOrder(node.left);
  preOrder(node.right);
}


const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const root = sortedArrayToBST(arr, 0, n - 1);
console.log("Preorder traversal of constructed BST<br>");
preOrder(root);
