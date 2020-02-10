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

  // create a method named breadthFirst() ====> Done 
  // accepts a tree ====> Done
  breadthFirst(){
    let breadthInOutput = [];
    let queueTemp = [];

    if ( this.root !== null ){
      queueTemp.push(this.root);

      while( queueTemp.length > 0 ){
        let node = queueTemp.shift();
        breadthInOutput.push(node.value);
        if( node.left !== null ){
          queueTemp.push(node.left);
        }
        if( node.right !== null ){
          queueTemp.push(node.right);
        }
      }
      return breadthInOutput;
    } else return null;
  }
}


module.exports = BinaryTree;