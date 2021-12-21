let moveZeros = (nums) => {

    let left = 0;
    let right = 0;
    while(right < nums.length) {
        let temp = 0;
       if(nums[right]!==0) {
           temp = nums[right]
           nums[right] = nums[left]
           nums[left++] = temp; 
       }  
           right++;
    }
    console.log(nums)
    return nums
}



console.log(moveZeros([3,0,4,5,0,0,1]))

console.log(moveZeros([0,0,4,5,0,1,1]))