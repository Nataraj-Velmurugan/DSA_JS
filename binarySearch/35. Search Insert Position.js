let nums = [1,3,5,6], target = 5;

var searchInsert = function(nums, target) {
    let low=0, high= nums.length - 1;
    while(low<=high){
      let mid = Math.floor((low+high)/2);
      if(nums[mid] === target) return mid;
      if(nums[mid] < target) {
        low = mid+1;
      }else {
        high = mid-1;
      }
    }
    return low
};