let nums = [1,2,3,4,5,6,7], k = 3


var rotate = function(nums, k) {
    if(k> nums.length) {
          for(let i=0; i<k; i++){
          let tempNums = nums.splice(0, nums.length-1);
          nums.push(...tempNums)
        }
      return nums
    } else {
      let tempNums = nums.splice(nums.length-k, nums.length);
      nums.splice(0, 0, ...tempNums)
      return nums
    }
  
  };