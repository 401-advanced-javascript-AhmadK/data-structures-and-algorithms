'use strict'; 

let HashMap = require('./hash-table.js');
  
const repeatedWord = (str) => {
  let splittedString = str.split(' ');
  let Hash = new HashMap(1024);

  for(let i=0;i<splittedString.length;i++){
    splittedString[i]=splittedString[i].toLowerCase();

    if(splittedString[i].includes(',') || splittedString[i].includes('.')) 
      splittedString[i]= splittedString[i].slice(0, splittedString[i].length-1);
    
    if(Hash.contain(splittedString[i])) return splittedString[i];
    
    Hash.add(splittedString[i], splittedString[i]);
  } 
};

module.exports = repeatedWord;