/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
'use strict';

let Node = require('./node.js');

class BinarySearchTree {
  constructor( root = null ){
    this.root = root;
  }
  
  add(value) {
      
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            break;
          } else {
            current = current.right;
          }
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  contain(value){     
    let node = this.root;
    
    while (node) {
      if (value === node.value) {
        return true;
      }
      node = value < node.value ? node.left : node.right;
    
    }
    
    return false;
  }
}


module.exports = BinarySearchTree;