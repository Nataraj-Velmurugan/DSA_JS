let letters = ["c", "f", "j"], target = "j";

var nextGreatestLetter = function (letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (target < letters[i]) return letters[i]
    }
    return letters[0]
};

console.log(nextGreatestLetter(letters, target))