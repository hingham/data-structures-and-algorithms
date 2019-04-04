
const arrayShift = module.exports = {};


arrayShift.insertShiftArray = (arr, item) => {
    if(!!!item){
        return null;
      }
      
  let result = [];
  arr[arr.length] = 0;
  let l = arr.length;
  let middle = Math.floor(l/2 );
  

  for (let i = l-1; i >=middle; i--){
    arr[i] = arr[i-1];

    if( i === middle){
      arr[i] = item;
    }
  
  }
  return arr;
};


 