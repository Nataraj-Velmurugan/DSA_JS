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

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let inputString = "cbaedbcatgh";
let match = "abc"

let findAnagram = (inputString, match) => {
    let splitInput = inputString.split('');
    let splitMatch = match.split('');

    let matchObj = {};

    for (let i = 0; i < splitMatch.length; i++) {
        matchObj[splitMatch[i]] = matchObj.hasOwnProperty(splitMatch[i]) ? matchObj[splitMatch[i]] + 1 : 1;
    }

    let inputStringObj = {};

    for (let i = 0; i < splitInput.length; i++) {
        inputStringObj[splitInput[i]] = inputStringObj.hasOwnProperty(splitInput[i]) ? inputStringObj[splitInput[i]] + 1 : 1;

        if (i >= match.length) {
            delete inputStringObj[splitInput[i - match.length]]

            if (inputStringObj[splitInput[i]] === 1) {
                delete inputStringObj[splitInput[i]]
            } else {
                inputStringObj[splitInput[i]] = inputStringObj[splitInput[i]] - 1
            }
        }


        console.log(matchObj)
        console.log(i)
        console.log(inputStringObj)

        // if(JSON.stringify(matchObj) === JSON.stringify(inputStringObj)) {
        //     console.log("matches")
        // }
    }

}

// findAnagram(inputString, match)


let image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

var flipAndInvertImage = function(image) {
    for(let i=0; i<image.length; i++) {
      image[i] = image[i].reverse();
      for(let j=0; j<image[i].length; j++) {
        if(image[i][j] === 0) {
          image[i][j] = 1
        } else {
          image[i][j] = 0
        }
      }
    }
  
  return image
};

console.log(flipAndInvertImage(image))