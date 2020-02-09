/* eslint-disable no-constant-condition */
'use strict';



function  FizzBuzzTree(tree){

  let _traverse = (node) => {
    
    ( node.value % 3 === 0 && node.value % 5 === 0 ) ? node.value = 'FizzBuzz' :
      ( node.value % 5 === 0 ) ? node.value = 'Buzz' :
        ( node.value % 3 === 0 ) ? node.value = 'Fizz' :
          node.value = `${node.value}`;

    if(node.left) _traverse(node.left);
    if(node.right) _traverse(node.right);
  };
  
  _traverse(tree.root);
  return tree;
}


module.exports = FizzBuzzTree;