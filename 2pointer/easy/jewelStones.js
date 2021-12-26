let jewels = "aA", stones = "aAAbbbb";

let jewels1 = "ebd", stones1 = "bbb"

var numJewelsInStones = function (jewels, stones) {
    let jw = jewels.split('');
    let st = stones.split('');
    let jwObj = {};

    for (let i = 0; i < jw.length; i++) {
        jwObj[jw[i]] = 1
    }

    let count = 0;
    let left = 0, right = st.length - 1;

    while (left <= right) {
        if (left === right) {
            if (jwObj.hasOwnProperty(st[left])) count++
        } else {
            if (jwObj.hasOwnProperty(st[left])) count++
            if (jwObj.hasOwnProperty(st[right])) count++
        }

        left++;
        right--;
    }

    // return count
    console.log(count);

};

numJewelsInStones(jewels, stones)