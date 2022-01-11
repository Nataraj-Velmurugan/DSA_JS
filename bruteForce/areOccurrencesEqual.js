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

console.log(areOccurrencesEqual(s))