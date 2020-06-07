'use strict';

let repeatedWords = require('../repeated-word.js');

describe('repeatedWords() Tests', () => {
  it('repeatedWords(): Returns undefined if the input string is empty string', () =>{
    let str = '';
    expect(repeatedWords(str)).toBe(undefined);
  });
  it('repeatedWords(): Returns the first repeated word in the string', ()=> {
    let str = 'Once upon a time, there was a brave princess who...';

    expect(repeatedWords(str)).toEqual('a');
  });
  it('repeatedWords(): Returns the first repeated word even if it followed by a ","', () => {
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWords(str)).toEqual('summer');
  });
  it('repeatedWords(): Returns the first repeated word even if it is followed by a "."', () => {
    let str = 'This is life. Just live life do not waste it';
      
    expect(repeatedWords(str)).toEqual('life');
  });
  it('repeatedWords(): Returns the first repeated word even if it capitalized', () => {
    let str = 'dude this is life. Life i say';

    expect(repeatedWords(str)).toEqual('life');
  });
});