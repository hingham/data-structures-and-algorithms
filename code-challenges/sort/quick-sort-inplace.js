let arr = [8, 5, 3, 9, 6]

function pivot(arr, start, end){
    let pivot = arr[start];
    let lStack = [];
    let rStack = [];
    
    for(let i = start+1; i<=end; i++){
        debugger
        console.log(arr);
        if(arr[i] <= pivot){
            lStack.push(arr[i]);
        }
        if(arr[i] > pivot){
            rStack.push(arr[i])
        }
    }

    let pivotPosition = lStack.length;

    for(let i = start; i <= end; i++){
        if(lStack.length > 0){
            arr[i] = lStack.pop();
        }

        else if(rStack.length > 0){
            arr[i+1] = rStack.pop();
        }
    }
    arr[pivotPosition] = pivot;
    return pivotPosition;
}

function quickSort(arr){
    let pivotIdx = pivot(arr, 0, arr.length -1); // O(n)
    helper(arr, 0, pivotIdx -1); // 
    helper(arr, pivotIdx+1, arr.length -1);
}

function helper(arr, start, end){
    if(start >= end){
        return null;
    }
    let pivotIdx = pivot(arr, start, end ); //O(n)
    helper(arr, start, pivotIdx-1); // log n
    helper(arr, pivotIdx + 1, end ); // log n
}

quickSort(arr);
console.log('sorted arr: ', arr);



