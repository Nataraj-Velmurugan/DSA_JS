let nums = [1,0,1,1], k = 1

var containsNearbyDuplicate = function(nums, k) {
    let newObj = {};
    for(let i=0; i<nums.length; i++) {
        let current = nums[i]
        if(newObj.hasOwnProperty(current) && i-newObj[current] <= k) {
            return true 
        }
        else {
            newObj[current] = i
        }
    }

     return false
};

console.log(containsNearbyDuplicate(nums, k))