// "Given sorted integer array in non-decreasing order, return the array of the squares of each number sorted in non-decreasing order"

let a = [-7,-1,2,3,4,5]

let squareSort = (nums) => {
    let left = 0, right = nums.length-1;
    while(left < right) {
        nums[left] *= nums[left];
        nums[right] *= nums[right];
        left++;
        right--;
        if(left === right){
            nums[left] *= nums[left]
        }
    }
    console.log(nums)
    return nums;
}

squareSort(a)


// from Babu Narayanan Manickam to everyone:    9:32 AM
// 1) Create a new array of same size and value
// 2) left = 0, right = len-1
// 3) insertIndex = len - 1 (bigger number at end)
// 4) while (left <= right) 
//     a) If left absolute is smaller than right absolute
//          --> insert the squared value of left in the insert index
//     b) else insert the squared value of right in the insert index