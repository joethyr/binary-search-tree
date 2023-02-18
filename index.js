import { Node } from "./node.js"
import { Tree } from "./tree.js"


const randomArray = (size) => Array.from({ length: size }, () => Math.floor(Math.random() * 100))
const test = Tree(randomArray(10))
test.insert(29)
test.prettyPrint()
