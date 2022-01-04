let  nums = [4,5,6,7,19,9,0,1,2], target = 9;

let search = (nums, target) => {
    let left = 0, right = nums.length-1;
    let result  = false
    
    while(left < Math.round(nums.length/2)) {

      if(nums[left] === target) {
        result = true
        return left
      }
      if(nums[right] === target){
        result = true
        return right
      }

      left++;
      right--;
    }
  
    if(result === false) {
      return -1
    }
}

console.log(search(nums, target))