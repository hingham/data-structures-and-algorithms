'use strict'

const math = {};


//module is a global that you get on the node side
//every module exports something
//so that when you require the thing, exports and are equal

math.add = (a, b) =>{
    if(typeof a! =='number' || typeof b ! ==='number'){
        return null;
    }
    return a + b;

}

module.exports = math;