let k = 18

var smallestRepunitDivByK = function(K) {
    let remainder = 0;
    for (let length_N = 1; length_N <= K; length_N++) {
        remainder = (remainder * 10 + 1) % K;
        if (remainder == 0) {
            return length_N;
        }
    }
    return -1;
};

console.log(smallestRepunitDivByK(k))