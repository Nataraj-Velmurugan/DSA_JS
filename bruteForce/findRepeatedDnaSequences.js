let s = "AAAAAAAAAAAAA"

var findRepeatedDnaSequences = function(s) {
    let sObj = {}
    for(let i=0; i<=s.length-10; i++){
        sObj[s.substring(i, i+10)] ? sObj[s.substring(i, i+10)] = sObj[s.substring(i, i+10)] + 1 : sObj[s.substring(i, i+10)] = 1
    }
    let resArr = []
    for(let i in sObj){
        if(sObj[i] >= 2){
            resArr.push(i)
        }
    } 
    // console.log(resArr)
    return resArr
};

findRepeatedDnaSequences(s)