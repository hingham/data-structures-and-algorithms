
const arrayShift = module.exports = {};

console.log('hello');

arrayShift.insertShiftArray = (arr, item) => {
    if(arguments.length < 2){
        return null;
      }
      
  let result = [];
  let l = arr.length;


  for (let i = 0; i<l+1; i++){
    if(i< Math.ceil(l/2)){
      result[i]=arr[i];
    }
    else if(i === Math.ceil(l/2)){
      result[i] = item;
    }
    else if (i > Math.ceil(l/2)){
      result[i] = arr[i-1];
    }
  }
  return result;
};


console.log(arrayShift.insertShiftArray([1,2,3], 'x'));
// console.log(array.insertShiftArray([1,2,3], 'x'));
 