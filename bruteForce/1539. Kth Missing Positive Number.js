let arry = [1,2,3,4], ky = 2

var findKthPositive = function(arr, k) {
    let i=1;
    let missingArray = [];
    let index = 0;
    while(missingArray.length <= k){
        if(arr[index] !== undefined){
            if(i < arr[index] && i !== arr[index]) {
                missingArray.push(i); 
            }else{
                index++
            }
        } else{
            missingArray.push(i);  
        }
        i++
    }
    return missingArray[k-1]
};

findKthPositive(arry, ky)