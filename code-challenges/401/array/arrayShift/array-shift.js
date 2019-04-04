
const arrayShift = module.exports = {};


arrayShift.insertShiftArray = (arr, item) => {
    console.log(!!!item);
    if(!!!item){
        return null;
      }

    
      
  let result = [];
  arr[arr.length] = 0;
  let l = arr.length;
  console.log(l);
  let middle = Math.floor(l/2 );
  

  for (let i = l-1; i >=middle; i--){
    console.log(arr[i]);
    arr[i] = arr[i-1];

    if( i === middle){
      arr[i] = item;
      console.log('middle');
    }
  
  }
  return arr;
};


console.log(arrayShift.insertShiftArray([1,2,3, 4], 'x'));
// console.log(array.insertShiftArray([1,2,3], 'x'));
 