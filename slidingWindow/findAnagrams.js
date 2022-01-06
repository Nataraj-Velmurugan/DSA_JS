let  s = "abab", p = "ab";

var findAnagrams = function(s, p) {
    let pObj = {};
    for(let i=0; i<p.length; i++){
      pObj.hasOwnProperty(p[i]) ? pObj[p[i]] = pObj[p[i]] + 1 : pObj[p[i]] = 1
      console.log(p[i])
    }
   
    let resultArr = [];
    let first = 0;
    while(first <= s.length-p.length) {
      let sObj = {};
      for(let i=first; i<first+p.length; i++){
        sObj.hasOwnProperty(s[i]) ? sObj[s[i]] = sObj[s[i]] + 1 : sObj[s[i]] = 1
      }
      console.log(pObj, sObj)
      let count = true;
      for(let i in pObj){
        if(pObj[i] !== sObj[i]) count = false
      }
      if(count === true) resultArr.push(first)
      first++;
    }

    return resultArr
    
};

console.log(findAnagrams(s,p))