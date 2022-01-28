class Stack {
    constructor() {
        this.items = []
    }

    size() {
        return this.items.length;
    }

    push(ele) {
        this.items.push(ele)
    }

    pop() {
        if (this.size() > 0) return this.items.pop();
    }

    peek() {
        return this.items[this.size() - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.items = [];
    }
}

let para = ']]]'


let stack = new Stack();

let parObj = {
    '}': '{',
    ']': '[',
    ')': '('
};

function validParanthesis(str) {
    for (let i = 0; i < str.length; i++) {
        if (Object.keys(parObj).includes(str[i])) {
            if (stack.isEmpty() || stack.pop() !== parObj[str[i]]) return false
            else stack.push(str[i])
        }
    }
    return stack.isEmpty()
}

console.log(validParanthesis(para))