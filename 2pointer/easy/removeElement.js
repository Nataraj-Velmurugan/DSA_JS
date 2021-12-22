var removeElement = function(nums, val) {
    let left = 0, right = nums.length-1;
    let returnNums = []
    while(left<right) {
        if(nums[left] !== val) {
            returnNums.push(nums[left])
        }
        if(nums[right] !== val) {
            returnNums.push(nums[right])
        }
        left++;
        right--;
    }
    
    return returnNums;

};

var removeElement1 = function(nums, val) {
    let left = 0;
    for(let right = 0; right <nums.length; right++) {
        if(nums[right] !== val) {
            nums[left++] = nums[right]
        }
    }
    
    return nums;

};