let nums = [2,7,9], original = 4

var findFinalValue = function(nums, original) {
    let count = 0;
    if(!nums.includes(original)) return original
    
    while(nums.includes(original)){
      count = 2 * original
      original = count
    }
    return count
  }


  console.log(findFinalValue(nums, original))