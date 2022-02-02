let s = "abab", p = "ab"

""
""
// cba bae aeb eba bab aba bac acd

var findAnagrams = function (s, p) {
    let pObj = {};
    for (let i = 0; i < p.length; i++) {
        pObj.hasOwnProperty(p[i]) ? pObj[p[i]] = pObj[p[i]] + 1 : pObj[p[i]] = 1
    }

    let sObj = {};
    for (let i = 0; i < p.length; i++) {
        sObj.hasOwnProperty(s[i]) ? sObj[s[i]] = sObj[s[i]] + 1 : sObj[s[i]] = 1
    }
    let resultArr = [];
    let left = 0;
    let right = left + p.length;
    while (left <= s.length - p.length) {
        let count = true;
        for (let i in pObj) {
            if (sObj[i] !== pObj[i]) count = false
        }
        if (count === true) resultArr.push(left)

        if (s[left] !== s[right]) {
            if(sObj[s[left]] === 1) delete sObj[s[left]]
            else sObj[s[left]] = sObj[s[left]] - 1
            sObj[s[right]] ? sObj[s[right]] = sObj[s[right]] + 1 : sObj[s[right]] = 1
        } 

        left++;
        right++;
    }

    return resultArr

};

console.log(findAnagrams(s, p))