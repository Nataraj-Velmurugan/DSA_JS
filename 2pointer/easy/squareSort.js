// "Given sorted integer array in non-decreasing order, return the array of the squares of each number sorted in non-decreasing order"

let nums = [-7, -5, 1, 3, 4, 7];

let squareSort = (nums) => {
    for(let i=0; i<nums.length;i++) {
        nums[i] = nums[i]*nums[i]
    }

    let left = 0;
    let right = nums.length-1
    let numsIndex = nums.length-1;
    let sortedNums = [];
    console.log(nums)
    while(left <= right) {
        let temp = 0;
        if(nums[left] < nums[right]) {
            sortedNums[numsIndex--] = nums[right--]
        }else {
            sortedNums[numsIndex--] = nums[left++] 
        }
    }
    console.log(sortedNums)
}

squareSort(nums);

// from Babu Narayanan Manickam to everyone:    9:32 AM
// 1) Create a new array of same size and value
// 2) left = 0, right = len-1
// 3) insertIndex = len - 1 (bigger number at end)
// 4) while (left <= right) 
//     a) If left absolute is smaller than right absolute
//          --> insert the squared value of left in the insert index
//     b) else insert the squared value of right in the insert index