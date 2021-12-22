// let nums = [1, 3, 5, 5, 6, 7, 8];

// let dup = 3;


// let removeDuplicates = (nums, dup) => {
//     let left = 0, right = nums.length - 1;
//     let newNums = [];
//     while (left < right) {
//         if (nums[left] !== dup) {
//             newNums.push(nums[left]);
//             left++;
//         } else if (nums[right] !== dup) {
//             newNums.push(nums[right]);
//             right--;
//         } else {
//             left++;
//         }
//     }

//         console.log(newNums)
//     return nums;
// }

// removeDuplicates(nums, dup)

// var chai = require('chai');  
// var assert = chai.assert;

// describe("Problem Solving", () => {
//     it('Testcase 1', () => {
//         assert.equal();
//     });
//     it('Testcase 2', () => {
//         assert.equal();
//     });
//     it('Testcase 3', () => {
//         assert.equal();
//     });
// })




console.log(removeElement1([0,1,2,2,3,0,4,2], 2))