let nums = [3,1,2,4]

var sortArrayByParity = function (nums) {
    let i = 0;
    let lastElement = nums[nums.length - 1]

    while (i < nums.length) {
        if(nums[i] === lastElement ) break;
        let modl = nums[i]
        let temp = 0;
    
        console.log(nums[i])
        console.log(modl%2 !== 0)
        
        if (modl % 2 !== 0) {
            temp = nums[i]
            nums.splice(i, 1);
            nums.push(temp);
            i--
        }
        i++;
    }
    return nums
};