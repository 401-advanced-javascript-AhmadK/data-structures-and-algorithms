'use strict';

// create a Node class => Done
class Node {
// that has properties for the value of the node, left child node and right child node >> Done
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;