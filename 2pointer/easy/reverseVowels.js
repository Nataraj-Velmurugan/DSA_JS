/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    
    let arrayVowels = ['a', 'e', 'i', 'o', 'u'];
    let sa = s.split('');
    
    let left = 0, right = sa.length-1;
    
    while(left <right) {
        let tempChar;
        if(arrayVowels.includes(sa[left]) && arrayVowels.includes(sa[right])) {
            console.log("inisde")
            tempChar = sa[left];
            sa[left++] = sa[right];
            sa[right--] = tempChar;
        } else if(arrayVowels.includes(sa[left])){
            right--;
        } else {
            left++;
        }
    }

    console.log(sa.join(""));
          
    return sa.join("");
    
};

reverseVowels("leetcode");