// https://leetcode.com/problems/max-consecutive-ones-iii/

let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;

let maxConsOnes = (nums, k) => {
    let left = 0; right = 0;

    for(right = right; right < nums.length; right++) {
        if(nums[right] === 0) {
            k--;
        }

        if(k < 0){
            if(nums[left] === 0){
                k++;
            }
            left++;
        }
    }

    console.log(right-left)
}

maxConsOnes(nums, k)