import { Node } from "./node.js"

const Tree = (arr) => {
  const sortedArray = [...new Set(arr)].sort((a, b) => a - b)

  const buildTree = (array) => {
    if (array.length === 0) return null

    const mid = Math.floor(array.length / 2)
    const node = Node(array[mid])
    node.left = buildTree(array.slice(0, mid))
    node.right = buildTree(array.slice(mid + 1))
    return node
  }

  const root = buildTree(sortedArray)

  const insert = (value, currentNode = root) => {
    if (currentNode === null) return Node(value)
    if (currentNode.data === value) return;
    if (currentNode.data < value) {
      currentNode.right = insert(value, currentNode.right);
    } else {
      currentNode.left = insert(value, currentNode.left);
    }
    return currentNode
  }

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  return { prettyPrint, insert }

}

export { Tree }