'use strict';

let Node = require ('../node.js');
let fizzBuzzTree = require('../fizz-buzz-tree.js');
let BinaryTree = require('../tree.js');


describe('Binary Tree Module', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new Node(1);
    let node2 = new Node(6);
    let node3 = new Node(10);
    let node4 = new Node(15);
    let node5 = new Node(2);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node3.right = node5;

    tree = new BinaryTree(node1);
  });
  it('If the value is divisible by 3, replace the value with “Fizz”',() => {
    expect(fizzBuzzTree(tree).root.left.value).toEqual('Fizz');
    expect(typeof fizzBuzzTree(tree)).toBe('object');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”',() => {
    expect(fizzBuzzTree(tree).root.right.value).toEqual('Buzz');
    expect(typeof fizzBuzzTree(tree)).toBe('object');
  });
  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',() => {
    expect(fizzBuzzTree(tree).root.left.left.value).toEqual('FizzBuzz');
    expect(typeof fizzBuzzTree(tree)).toBe('object');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String',() => {
    expect(fizzBuzzTree(tree).root.value).toEqual('1');
    expect(typeof fizzBuzzTree(tree).root.value).toBe('string');
    expect(fizzBuzzTree(tree).root.right.right.value).toEqual('2');
    expect(typeof fizzBuzzTree(tree).root.value).toBe('string');
  });
});