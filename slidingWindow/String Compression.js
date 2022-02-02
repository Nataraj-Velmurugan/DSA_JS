let chars = ["p","p","p","p","m","m","b","b","b","b","b","u","u","r","r","u","n","n","n","n","n","n","n","n","n","n","n","u","u","u","u","a","a","u","u","r","r","r","s","s","a","a","y","y","y","g","g","g","g","g", "g","g","g","g","g", "g"]
var compress1 = function(chars) {
    if(chars.length === 1) return chars[0]
    let charObj = {}
    let resString = [];
    for(let i=0; i<chars.length; i++){
      charObj[chars[i]] ? charObj[chars[i]] = charObj[chars[i]] + 1 : charObj[chars[i]] = 1
    }
    
    for(let i in charObj){
      if(charObj[i] === 1){
          resString.push(i);
      }else {
        resString.push(i);
        resString.push(charObj[i]);
      }

    }
    
    return resString
};

var compress = function(chars) {
    let left = 0;
    while(left<chars.length) {
        let right = left+1
        let count = 1;
        while(chars[left] === chars[right]){
            count++
            chars.splice(right,1)
        }
        let countString = count+'';
        
        if(count > 1){
            let i = 0;
            while(i < countString.length){
                chars.splice(right+i, 0, countString[i])
                i++;
            }
        }
        left += countString.length
    }
    
    return chars
};

console.log(compress(chars))
