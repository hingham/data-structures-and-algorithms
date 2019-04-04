'use strict';

const bracket = require('../multiBracketValidation/multi-bracket-validation.js');


describe('multibracket bracket', () =>{
  it('returns true when there are matching bracket', ()=> {
    let str = '[]()';
    let result = bracket.multiBracketValidation(str);
    expect(result).toBe(true);
  });
  it('returns false when there are bracket do not close', ()=> {
    let str = '[])';
    let result = bracket.multiBracketValidation(str);
    expect(result).toBe(false);
  });
  it('returns true if brakets are balanced, even it there is text', ()=> {
    let str = '([]{hello})';
    let result = bracket.multiBracketValidation(str);
    expect(result).toBe(true);
  });

});