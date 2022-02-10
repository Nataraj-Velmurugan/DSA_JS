var _ = require('lodash');
let s1 ="abc", s2 = "eideaooo";

// bruteforce
var checkInclusion1 = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let S1 = s1.split('').sort().join('');
    let customFlag = false;
    for(let i=0; i<s2.length-s1.length+1; i++){
      let s2SubString = s2.substring(i, s1.length+i).split('').sort().join('');
      if(s2SubString === S1) customFlag = true 
    }
    
    return customFlag
  
  };


  var checkInclusion = function(s1, s2) {
    let m=s1.length;
    let n=s2.length;

    if(n<m) return false;

    let freq1= Array(26).fill(0)
    let freq2= Array(26).fill(0)

    function asciiDif(a,b) {
        return `${a}`.charCodeAt(0) - `${b}`.charCodeAt(0);
    }

    for(let i=0;i<m;i++)
    {
        freq1[asciiDif(i, 'a')]++;
        freq2[asciiDif(i, 'a')]++;
    }

    console.log(freq1)

    // for(let i=m;i<n;i++)
    // {
    //     if(Arrays.equals(freq1,freq2)) return true;

    //     freq2[s2.charAt(i)-'a']++;
    //     freq2[s2.charAt(i-m)-'a']--;
    // }
    
    // if(Arrays.equals(freq1,freq2)) return true;

    // return false;

    
  };

