'use strict';



// create a BinaryTree class 
class BinaryTree {
  constructor( root=null ){
    this.root = root;
  }

  // root => Left => Right 
  preOrder(){
    let outputArray = [];

    let _traverse = (node) => {
      outputArray.push(node.value);

      if( node.left ) _traverse(node.left);
      if( node.right ) _traverse(node.right);

    };

    _traverse(this.root);
    return outputArray;
  }

  // Left => root => right
  inOrder(){
    let outputArray = [];

    let _traverse = (node) => {
    
      if( node.left ) _traverse(node.left);
      outputArray.push(node.value);
      if( node.right ) _traverse(node.right);

    };

    _traverse(this.root);
    return outputArray;
  }

  // left => right => root
  postOrder(){
    let outputArray = [];

    let _traverse = (node) => {
    
      if( node.left ) _traverse(node.left);
      if( node.right ) _traverse(node.right);
      outputArray.push(node.value);

    };

    _traverse(this.root);
    return outputArray;        
  }
}

module.exports = BinaryTree;