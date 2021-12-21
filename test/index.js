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

var chai = require('chai');  
var assert = chai.assert;

let reverseVowels = (inputString) => {
    let arrayVowels = ['a', 'e', 'i', 'o', 'u'];
    let sa = inputString.split('');
    
    let left = 0, right = sa.length-1;
    
    while(left < right)  {
        if(arrayVowels.includes(sa[left]) && arrayVowels.includes(sa[right])) {
            let temp = sa[left];
            sa[left] = sa[right]
            sa[right] = temp
            left++;
            right--;
        }else if(!arrayVowels.includes(sa[left])) {
            left++;
        } else {
            right--
        }
    }

    console.log(sa.join(""));
          
    return sa.join("");
}


describe("Problem Solving", () => {
    it('Testcase 1', () => {
        assert.equal(reverseVowels("leetcode"), 'leotcede');
    });
    it('Testcase 2', () => {
        assert.equal(reverseVowels("aeiou"), 'uoiea');
    });
    it('Testcase 3', () => {
        assert.equal(reverseVowels("hello"), 'holle');
    });
})