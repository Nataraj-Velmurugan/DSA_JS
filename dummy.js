// Given an array of integers and a number k.
// Return the highest sum of any k consecutive elements in the array.

// from Babu Narayanan Manickam to everyone:    12:32 PM

// from Babu Narayanan Manickam to everyone:    12:34 PM
// 1) Add first k elements and have a sum
// 2) loop from k element until end 
//     a) subtract the first element from the sum
//     b) add the new element to the sum
//     c) compare with existing sum --> whichever max --> make it max


let nums = [1,5,2,3,7,1]
// from Babu Narayanan Manickam to everyone:    12:32 PM
let k = 3

let addSum = (nums, k) => {
    
    let max = nums[1]+nums[2]+nums[3];
    for(let i=1; i<nums.length; i++) {
        let temp = 0;
        temp += nums[i];
        while(temp < max) {
            console.log(temp)
            temp += nums[i++]
        }
        if(temp > max) {
            console.log(temp)
            max = temp
        }
    }
    console.log(max)
}

addSum(nums, 1)