// Given an array of integers and a number k.
// Return the highest sum of any k consecutive elements in the array.

// from Babu Narayanan Manickam to everyone:    12:32 PM

// from Babu Narayanan Manickam to everyone:    12:34 PM
// 1) Add first k elements and have a sum
// 2) loop from k element until end 
//     a) subtract the first element from the sum
//     b) add the new element to the sum
//     c) compare with existing sum --> whichever max --> make it max

let digits = "23"

var letterCombinations = function (digits) {
    let phoneLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let resArr = [];

    for (let i = 0; i < phoneLetters[digits[0]].length; i++) {
        let single = '';
        for (let j = 0; j < digits.length; j++) {
            single += phoneLetters[digits[i]] + phoneLetters[digits[j]];
            resArr.push(single)
        }
    }

    console.log(resArr)

};

// letterCombinations(digits)...



function isUpperCase(myString) {
    return (myString === myString.toUpperCase());
}
function isLowerCase(myString) {
    return (myString === myString.toLowerCase());
}

let s1 = "dDzeE"

var longestNiceSubstring = function (s) {
    let lns = '';
    let compStr = ''
    let resArr = [];
    for (let i = 0; i < s.length; i++) {
        let bool = true;
        let counter = i
        console.log(i)
        while (bool === true) {
            if (s[counter + 1] === undefined) break;

            if ((isLowerCase(s[counter]) && s[counter] === s[counter + 1].toLowerCase()) || (isUpperCase(s[counter]) && s[counter] === s[counter + 1].toUpperCase())) {
                if (lns[lns.length - 1] !== s[counter]) lns += s[counter]
                if (lns[lns.length - 1] !== s[counter + 1]) lns += s[counter + 1]
            } else {
                break;;
            }
            counter++
            resArr.push(lns)
        }
        if (compStr.length < lns.length) {
            compStr = lns
            lns = ''
        }

    }



    if (compStr.length > lns.length) return compStr
    return lns

};

// console.log(longestNiceSubstring(s))
let strs = ["ac", "d"]

var groupAnagrams = function (strs) {
    let resObj = {}
    for (let i = 0; i < strs.length; i++) {
        let sortString = strs[i].split('').sort().join('');
        !resObj.hasOwnProperty(sortString) ? resObj[sortString] = [strs[i]] : resObj[sortString].push(strs[i])
    }
    let resArr = [];
    for (let i in resObj) {
        resArr.push(resObj[i])
    }

    return resArr

}


// groupAnagrams(strs)
let s = "abacbc"

var areOccurrencesEqual = function(s) {
    let sObj = {}
    for(let i=0; i<s.length; i++){
      sObj[s[i]] ? sObj[s[i]] = sObj[s[i]] + 1 : sObj[s[i]] = 1
    }
  
    let result = true;
    let sObjKey = Object.keys(sObj);
    // console.log(sObjKey)
    for(let i=0; i<Object.keys(sObj).length-1; i++){
        if(sObj[sObjKey[i]] !== sObj[sObjKey[i+1]]) return false
    }
  
    return result
};

// console.log(areOccurrencesEqual(s))


function bubble_Sort(arr){
    for (i=0; i < arr.length; i++){
        for (j=0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]))

const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
}

const selectionSort = (originalList) => {
    
    const list = [...originalList]
    const len = list.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        [list[i], list[min]] = [list[min], list[i]]
      }
    }
    return list
}

const listOfNumbers = [1, 6, 3, 4, 5]
// console.log(selectionSort(listOfNumbers)) //[1,3,4,5,6]

