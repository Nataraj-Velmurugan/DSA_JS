

// Start with first element 
// If the sum is less than the desired sum, slide to the next element [Grow]
// Again, sum that and check if it is lesser, equal or greater
// If it is lesser, add the next element to slide [Grow]
// If it is greater, than shrink the last element on the left [Shrink]
// If it is equal, you got it and again do both Grow and Shrink [Slide]

// Given an array of positive integers, find the subarrays that adds up to the given number (k)


let nums = [1,7,4,3,1,2,1,5,1];
let k = 7;

let growShrink = (nums, target) => {
    let left = 0, sum =0;
    for(let right=0; right < nums.length; right++) {
        sum += nums[right];
        while(sum > target) {
            sum -= nums[left++]
        }
        if(sum === target) {
            console.log(left, right)
        }
    }

}

growShrink(nums, k)