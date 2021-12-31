let nums = [1,2,3,1];

let findPeakElement = (nums) => {

if(nums.length === 1 || nums.length === 0) return 0
let left = 0, right = nums.length -1;
  
  let defaultPeak = 0;
  
  while(left <= Math.round(nums.length/2)) {
      if(nums[left] >= Math.pow(2, 31) - 1 || nums[left] <= Math.pow(-2, 31) ) return 0
  if(nums[right] >= Math.pow(2, 31) - 1 || nums[right] <= Math.pow(-2, 31) ) return 0
      if(nums[left] < nums[left+1]) {
          defaultPeak = Math.max(defaultPeak, nums[left+1])
      }else {
          defaultPeak = Math.max(defaultPeak, nums[left])
      }
      
      if(nums[right] < nums[right-1]) {
          defaultPeak = Math.max(defaultPeak, nums[right-1])
      } else {
          defaultPeak = Math.max(defaultPeak, nums[right])
      }
      
      left++;
      right--
  }
  
  return nums.indexOf(defaultPeak)
}

console.log(findPeakElement(nums))