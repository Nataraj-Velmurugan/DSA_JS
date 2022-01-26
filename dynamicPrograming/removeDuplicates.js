let  numsu = [1,1,1,1]
var removeDuplicates = function(nums) {
    let numsObj = {}
    for(let i=0; i<nums.length; i++){
     numsObj[nums[i]] ? numsObj[nums[i]] = numsObj[nums[i]] +1 : numsObj[nums[i]] = 1
     if(numsObj[nums[i]] > 2){
         nums.splice(i, 1);
         i--
     }
    }

    return nums.length
};

console.log(removeDuplicates(numsu))