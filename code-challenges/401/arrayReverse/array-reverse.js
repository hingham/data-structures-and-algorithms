function reverseArray(inArray){
    if(inArray.length<=1){
        return inArray;
    }

    let newArray = [];
    let counter = 0;

    for (let i = inArray.length; i>=0; i--){
        newArray[counter]=inArray[i];
        counter++;
    }
    console.log(newArray);
    return newArray;
};


//Stretch goal start

// function reverseArrayTwo(inArray){
//     counter = 0;

//     for(let i = inArray.length-1; i >=0; i -- ){
//         let temp = inArray[i];
//         inArray[i]= inArray[counter];
//         inArray[counter] = temp;
//         counter ++;
//     }
// }
