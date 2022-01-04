let  s = "Myself2 Me1 I4 and3"

var sortSentence = function(s) {
    
    let st = s.split(' ');
    let sList = [];
    
    for(let i=0; i<st.length; i++) {
      let num = st[i].substring(st[i].length, st[i].length-1);
      sList[num] = st[i].substring(0 , st[i].length-1);
    }
  
    return sList.join(' ');
};

console.log(sortSentence(s))