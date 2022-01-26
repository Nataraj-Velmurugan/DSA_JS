let s12 = "  hello world  ";

var reverseWords = function(s) {
    let st = s.split(' ');
    let resString = '';
    for(let i=st.length-1; i>=0; i--){
      if(st[i] !== '') 
        resString += st[i] + ' '
    }
    return resString.trim()
};

reverseWords(s12)