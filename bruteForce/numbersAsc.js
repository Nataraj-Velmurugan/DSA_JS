let  s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"

var areNumbersAscending = function(s) {
    let st = s.split(' ');
    let num = 0
    for(let i=0; i<st.length; i++) {
      if(!isNaN(parseInt(st[i]))) {
          let newNum = num
          num = parseInt(st[i])
          if(newNum >= num) return false
      }
    }
    return true
};

console.log(areNumbersAscending(s))