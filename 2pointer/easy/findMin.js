let nums = [2,5,1,-6,5,6,3,7,8,-5];

let findMin = (nums) => {
    let leftMin = 11;
    let rightMin = 11;
    let left = 0, right= nums.length-1;

    while(left < right) {
        if(nums[left] < leftMin) leftMin = nums[left]
        if(nums[right] < rightMin) rightMin = nums[right]
        left++;
        right--;
    }
    
    if(leftMin < rightMin) return leftMin;
    return rightMin;
    
};

console.log(findMin(nums))