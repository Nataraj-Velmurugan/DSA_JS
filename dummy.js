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



    if(compStr.length > lns.length) return compStr
    return lns

};

// console.log(longestNiceSubstring(s))


