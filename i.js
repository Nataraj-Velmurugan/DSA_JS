let sumZero1 = function(n) {
    let resArr = [];
    if(n%2 !== 0){
        let left=0, right=Math.floor(n/2)
        resArr.push(0)
        while(left < right){
            resArr.push(left+1)
            resArr.push(-(left+1))
            left++
        }
        return resArr
    } else {
        let left=0, right=n/2
        
        while(left < right){
            resArr.push(n)
            resArr.push(-(n))
            left++
            n--
        }
        return resArr
    }
};

console.log(sumZero1(8))