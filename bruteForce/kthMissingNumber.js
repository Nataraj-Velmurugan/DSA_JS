let arr = [1,2,3,4], k = 2;

var findKthPositive = function(arr, k) {
    let j = 0;
    let resultArr = [];
    let compArr = []
    for(let i=0; i<100; i++) {
        compArr[i] = i+1
    }

    for(let i=0; i<compArr.length; i++){
        if(compArr[i] === arr[j]) {
            j++
        } else {
           resultArr.push(compArr[i]) 
        }
    }

    return resultArr[k-1]
  };

console.log(findKthPositive(arr, k))