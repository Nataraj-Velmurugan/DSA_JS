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

let nums = [1,12,-5,-6,50,3];
let k = 4;

let maxAvgSubArray = (nums, k) => {
    let defaultSum = 0, defaultAvg = 0;
    for(let i=0; i<k; i++) {
        defaultAvg += nums[i]
    }
    
    defaultAvg = defaultSum/k;

    let right = 1, tempAvg = 0

    while(right < Math.round(nums.length/2)){
        let temp = 0
        for(let i=right; i<right+k; i++) {
            temp += nums[i];
        }
        tempAvg = temp/k

        if(defaultAvg < tempAvg ) {
            defaultAvg = tempAvg
        }

        right++;
    }

    console.log(defaultAvg)

}

maxAvgSubArray(nums, k)


// sliding window - optimized
let maxAvgSubArray1 = (nums, k) => {
    let right = k;
    let defaultSum = 0;
    for(let i=0; i<k; i++) {
        defaultSum += nums[i]
    }

    let left=0;
    let tempSum = 0;
    while(right < nums.length) {
        
        defaultSum = defaultSum + nums[right++] - nums[left++]
        
        if(tempSum < defaultSum) {
            tempSum = defaultSum
        }
    }

    return tempSum/k
    
}

maxAvgSubArray1(nums, k)