/* eslint-disable no-unused-vars */
'use strict';

let Stack = require('./stack.js');

function multiBracketValidation(str) {


  let storedLetters = [];
  let characters = [];
  let pairs = { '(': ')', '{': '}', '[': ']'};

  if (!str.length) return false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === '{' || str[i] === '(' ) {
      storedLetters.push(str[i]);
    }
    else if (str[i].match(/^[A-Za-z]+$/)){
      characters.push(str[i]);
    }
    else {
      let lastOpener = storedLetters.pop();
      if (str[i] !== pairs[lastOpener]){
        return false;
      }
    }
  }
  if (storedLetters.length !== 0) {
    return false;
  }
  return true;
}
  
module.exports = multiBracketValidation;