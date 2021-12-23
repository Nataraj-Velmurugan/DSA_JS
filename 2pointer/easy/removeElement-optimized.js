let removeElement = (nums, target) => {

    let left = 0;
    for(let right=0; right<nums.length; right++) {
        if(nums[right] != target) {
            nums[left++] = nums[right]
        }
    }

    return nums.splice(0, left)

}


console.log(removeElement([0,1,2,2,3,0,4,2], 2))