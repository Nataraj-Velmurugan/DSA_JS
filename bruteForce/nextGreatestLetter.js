let letters = ["c","f","j"], target = "j";

var nextGreatestLetter = function(letters, target) {
    let letterObj = {
        'a':1,
        'b':2,
        'c':3,
        'd':4,
        'e':5,
        'f':6,
        'g':7,
        'h':8,
        'i':9,
        'j':10,
        'k':11,
        'l':12,
        'm':13,
        'n':14,
        'o':15,
        'p':16,
        'q':17,
        'r':18,
        's':19,
        't':20,
        'u':21,
        'v':22,
        'w':23,
        'x':24,
        'y':25,
        'z':26
    }
    let letterValueArray = []
    for(let i=0; i<letters.length; i++){
        letterValueArray.push(letterObj[letters[i]])
    }
    
    let returChar = ''
    for(let i=0; i<letterValueArray.length; i++){
        if(letterObj[target] < letterValueArray[i])  return letters[i]
    }
    if(returChar === '') return letters[0]
};

console.log(nextGreatestLetter(letters, target))