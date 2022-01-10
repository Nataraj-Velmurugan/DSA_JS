let target = 7, nums = [2,3,1,2,4,3]


var minSubArrayLen = function(target, nums) {
    let left=0, right=1;
    let resArr = [];
    while(left < nums.length-1){
        if(target === nums[left] || target === nums[right]) return 1
        let temp = nums[left];
        while(temp < target){
            temp += nums[right++]
        }

        if(temp >= target) {
            resArr.push(right-left)
        }
        left++
        right = left+1
    }
    if(resArr.length === 1) return resArr[0]
    if(resArr.length !== 0){
        let result = resArr.sort((a,b) => {return a-b});
        return result[0]
    }else{
        return 0
    }
    
};

console.log(minSubArrayLen(target, nums))