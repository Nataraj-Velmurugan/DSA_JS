let nums = [1,5,2,3,7,1];
let k = 3

let maxSum1 = (nums, k) => {

    let left = 0, right=Math.round(nums.length/2), max = 0;
    while(left <= right) {
        let temp = 0;
        for(let i=0; i<k; i++) {
            temp += nums[i+left];
        }
        if(max < temp) {
            max = temp
        }
        left++
    }
    console.log(max)
    return max;
}

let maxSum = (nums, k) => {
    let max = 0
    for(let i=0; i<k;i++){
        max += nums[i]
    }
    let returnMax = 0; 
    let left = 0, right = k;
    
    while(right < nums.length){
        
        max += nums[right++];
        max -= nums[left++];
        
        if(returnMax < max) {
            returnMax = max
        }
    }

    console.log(returnMax)
}

maxSum(nums, k)

let nums1 = [8,4,2,3,11,15,2,1];
let k1 = 2;


let maxSum = (nums, k) => {
    let left = 0, right=k, sum = 0;
    let maxSum = 0;
    for(let i=0; i<k;i++) {
        maxSum += nums[i]
    }
    while(right < nums.length){
        maxSum = maxSum + nums[right++] - nums[left++];
        if(sum < maxSum) {
            sum = maxSum
        }
    }

    console.log(sum)
}

maxSum(nums1,k1)