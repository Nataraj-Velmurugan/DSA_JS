//  let nums = [4,4,2,2,5,5], k = 3

 let nums = [4,4,4,4,4,4], k = 4

function maxUnique(nums, k) {
    let left = 0, right = nums.length - k + 1;
    let maxValue = 1
    while(left < right){
        let current = left
        let numsObj = {}
        while(current < left+k) {
            numsObj[nums[current]] ? numsObj[nums[current]] = numsObj[nums[current]] + 1 : numsObj[nums[current]] = 1
            current++
        }

        console.log(numsObj)
        console.log(Object.keys(numsObj).length)
        
        maxValue = Math.max(Object.keys(numsObj).length, maxValue);
        left++
    }

    console.log(maxValue)

    return maxValue
}

maxUnique(nums, k)