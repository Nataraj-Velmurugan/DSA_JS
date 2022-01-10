let  nums = [1,0,1,0,1,0,1]
    
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i=0; i<nums.length; i++){
      if(nums[i] === 1){
        count++
      }else{
        count = 0
      }
      if(maxCount < count) maxCount = Math.max(maxCount, count)
    }
    
    return maxCount
};

findMaxConsecutiveOnes(nums)