/*
     * Hashing PsuedoCode
     *
     * Pattern -> Character (Key) : String (Value) && 
     * Data -> String (Key) : Character (Value)
     * 
     * Iterate through each word of String and corresponding character in Pattern
     *     1) If it is new (no entry) on both -> add to the respective map 
     *  2) If the character is not there but String in map -> return false
     *  3) If the character is there in map, then get the corresponding value & compare
     *      a) If it is not same as expected -> return false
     *  
     *  If all above conditions passed through then return true
     * 
     */

let pattern1 = "abab", s1 = "dog cat cat dog";

let pattern4 = "abba", s4 = "dog cat cat dog";

let pattern2 = "abba", s2 = "dog cat cat fish"

let pattern = "aaaa", s = "dog cat cat dog"

var wordPattern = function(pattern, s) {
    
    let pt = pattern.split('');
    let st = s.split(' ');
    
    let ptObj = {};
    let result = true;

    for(let i=0; i<pt.length; i++) {
        if(!ptObj.hasOwnProperty(pt[i])){
            ptObj[pt[i]] = st[i]
        } else {
            if(ptObj[pt[i]] !== st[i]){
                result = false;
                break;
            }
        }
    }

    return result

};

wordPattern(pattern, s)