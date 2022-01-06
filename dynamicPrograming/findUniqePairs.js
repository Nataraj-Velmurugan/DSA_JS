let  nums = [1,3,1,5,4], k = 0

var findUniquePairs = function(nums, k) {
    let count = 0;

    let numsObj = {};
    for(let i=0; i<nums.length; i++){
        numsObj.hasOwnProperty(nums[i]) ? numsObj[nums[i]] = numsObj[nums[i]] + 1 : numsObj[nums[i]] = 1
    }

    for(let i in numsObj){
        if(k===0){
            if(numsObj[i] >= 2) count++
        } else {
            if(numsObj.hasOwnProperty(parseInt(i)+k)) count++
        }
    }
    
    return count;
};

console.log(findUniquePairs(nums, k))