let s = "axc", t = "ahbgdc"
var isSubsequence = function(s, t) {
    
    let st = s.split('');
    let nt = t.split('');
    let comp = []
    let left = 0;
    let right = 0
    while(right < nt.length){
        if(st[left] === nt[right]) comp.push(st[left++])
        right++
    }
    
    return comp.join('') === s
};

console.log(isSubsequence(s,t))