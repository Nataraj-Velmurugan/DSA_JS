
// brutforce

let s = "abcabcacbcabcabcbcacbca";

var numberOfSubstrings = function(s) {
    let count = 0;
    for(let i=0; i<s.length-2; i++) {
     let j = s.length;
      while(s.substring(i, j).length >= 3) {
        if(s.substring(i, j).includes('a') && s.substring(i, j).includes('b') && s.substring(i, j).includes('c')) count++;
        j--;
      }
    }
    
    return count;
  };

  console.log(numberOfSubstrings(s))