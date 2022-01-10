let s = "MCMXCIII"; 
// 1000, 100, 1000, 10, 100, 1, 5
1000, 900,  90, 3

var romanToInt = function(s) {
    let romanObj = {
        "I": 1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
       "D":500,
       "M":1000
      }
      
      let res = 0;
      for(let i=0; i<s.length;i++){
        if(romanObj[s[i]] < romanObj[s[i+1]] && s[i+1] !== undefined) {
            res += romanObj[s[i+1]] - romanObj[s[i]]
            i++
        }else {
            res += romanObj[s[i]]
        }
      }
    return res
};

console.log(romanToInt(s))