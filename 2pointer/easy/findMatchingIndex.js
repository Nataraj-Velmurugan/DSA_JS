// caution: sorted array & positve integer

let nums = [1, 4, 5, 8, 11, 12, 16, 21];
let target = 19;

let findMatchingIndex = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (target == sum) {
            console.log(left, right)
        }
        else if (sum < target) left++
        else {
            right--
        }
    }
}

findMatching(nums, target)