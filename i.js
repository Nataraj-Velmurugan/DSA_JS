let n = 10;

let fibonacci = (n) => {
    let n1 = 0, n2 = 1;
    let resArr = []

    for (let i = 1; i <= n; ++i) {
        resArr.push(n1)
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }

    return resArr
}

// console.log(fibonacci(n))


// using recursion


