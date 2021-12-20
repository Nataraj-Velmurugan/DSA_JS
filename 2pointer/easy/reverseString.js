let newString = "alpha";

let reverseString = (input) => {
    let char = input.split("");
    let left = 0;
    let right = char.length -1;
    let tempVar;
    while(left < right) {
        tempVar = char[left];
        char[left] = char[right]
        char[right] = tempVar
        left++;
        right--;
    }
    return char.join('');
}

console.log(reverseString(newString));