'use strict';

let myStr = '[{fdafds}()]';
function multiBracketValidation(str){
  let bool = true;
  let arr = [];

  for(let i = 0; i< str.length; i++){
    let c = str.charAt(i);
    let l = arr.length;
    if(c === '{'|| c === '[' || c === '('){
    
      arr[l] = c;
      console.log(arr);
    }
    else if (c ==='}' || c ===']' || c ===')'){
      if( ( c==='}' && ( arr[l-1]=== '{' ) )
      || ( c===']' && ( arr[l-1]==='[') )
      || ( c===')' &&  (arr[l-1]==='(' ) ) ) {
        console.log('in loop');
        arr.length = arr.length - 1;
      }
      else{ bool = false; }
    }
  }
  console.log(bool);
  return bool;
}

module.exports = {multiBracketValidation};

multiBracketValidation(myStr);