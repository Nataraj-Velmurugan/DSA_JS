var isHappy = function(n) {
    let seen = [];
    while(n !== 1){
      let current = n;
      let sum = 0;
      while(current !== 0){
        sum += (current%10) * (current%10);
        current = Math.floor(current/10) 
      }
      if(seen.includes (sum)) return false;
      seen.push(sum);
      n = sum
      
    }
    return true
  };

  console.log(isHappy(19))

