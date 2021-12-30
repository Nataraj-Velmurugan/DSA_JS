var firstUniqChar = function(s) {
    let st = s.split('');
    let stringMap = {};

    for(let i=0; i< st.length; i++) {
        stringMap[st[i]] = stringMap.hasOwnProperty(st[i]) ?  stringMap[st[i]]+1 : 1
    }

    let defaults  = -1;

    for(let i in stringMap) {
        if(stringMap[i] === 1) {
            return st.indexOf(i)
        }
    }

    return defaults
};

console.log(firstUniqChar("aabb"))