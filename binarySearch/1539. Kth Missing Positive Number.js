arr = [2,3,4,7,11], k = 5

var findKthPositive = function(arr, k) {
    let low=0, high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        console.log(mid)
        if(arr[mid] - mid > k) {
            high = mid-1
        } else {
            low = mid+1
        }
    }

    return low+k
};

findKthPositive(arr, k)