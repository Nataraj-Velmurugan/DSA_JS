let nums = [5,4,8,9,1,2,10, 12]

// find the maximum product of two numbers 

let prodNum = (nums) => {
    nums.sort((a, b) => { return b-a})

    return [nums[0], nums[1]]
}

prodNum(nums)