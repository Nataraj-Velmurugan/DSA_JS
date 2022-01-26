
let nums = [3,1,3,4,2]

var findDuplicate = function(nums) {
    let numsObj = {}
    for(let i=0; i<nums.length; i++){
        numsObj[nums[i]] ? numsObj[nums[i]] = numsObj[nums[i]] + 1 :  numsObj[nums[i]] = 1
        if(numsObj[nums[i]] === 2) return nums[i]
    }

};

console.log(findDuplicate(nums))