// caution: sorted array

let nums = [1,4,5,8,11,12,16,21];
let target = 19;

let findMatchingIndex = (nums, target) => {
    let left = 0;
    let right = nums.length-1;
    while(left < right) {
        console.log("inside")
        if(target < nums[left] + nums[right]) right--
        else if (target > nums[left]+nums[right]) left++
        else if(target === nums[left] + nums[right]){
            console.log(left, right)
            break;
        }
    }
} 

findMatching(nums, target)