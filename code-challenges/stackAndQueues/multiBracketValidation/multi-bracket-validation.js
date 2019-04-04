"use strict";

let myStr = "[{fdafds}()]";
function multiBracketValidation(str) {
  let bool = true;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    let l = arr.length;
    if (c === "{" || c === "[" || c === "(") {
      arr[l] = c;
    } else if (c === "}" || c === "]" || c === ")") {
      if (
        (c === "}" && arr[l - 1] === "{") ||
        (c === "]" && arr[l - 1] === "[") ||
        (c === ")" && arr[l - 1] === "(")
      ) {
        arr.length = arr.length - 1;
      } else {
        bool = false;
      }
    }
  }
  return bool;
}

module.exports = { multiBracketValidation };

multiBracketValidation(myStr);
