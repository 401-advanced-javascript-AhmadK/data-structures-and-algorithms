'use strict';

let validator = require('../multi-bracket-validation.js');

describe('Multi-Bracket Validator', () => {
  
  it('Validates false if the input is Empty', () => {
    let input = '';

    expect( validator(input) ).toEqual(false);
  });

  it('Validates false if no valid openers or closers are present', () => {
    let input = 'yrcitciy768@#$%^&&';

    expect( validator(input) ).toEqual(false);
  });

  it('Validate to false if only openers are present or only closers are present', () => {
    let openers = '{[asdfj;jadfkl;([{';

    expect( validator(openers) ).toEqual(false);
  });

  it('Validate to true with good mix of input', () => {
    let goodInput = 'asgdsa{asdf[asd(asdf)asdf]asdf}asga';

    expect( validator(goodInput)).toEqual(true);
  });

  it('Validate to false with bad mixed input', () => {
    let badInput1 = 'ecwwec{wcewc[wecw(cwew}cwce}wcewc)';
    let badInput2 = 'ecwwec}wcewc]wecw)cwew{cwce(wcewc[';
    let badInput3 = 'ecwwec{{{{{{wcewc[wecw(cwew}cwce}wcewc)';

    expect( validator(badInput1) ).toEqual(false);
    expect( validator(badInput2) ).toEqual(false);
    expect( validator(badInput3) ).toEqual(false);
  });

});