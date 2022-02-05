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

let str = '[()]{}{[()()]()}'


let stack = new Stack();

let parObj = {
    '}': '{',
    ']': '[',
    ')': '('
};

function validParanthesis(str) {
    for (let i = 0; i < str.length; i++) {
        if (!stack.isEmpty()) {
            if (stack.peek() === parObj[str[i]]) stack.pop()
        } else {
            stack.push(str[i])
        }
    }

    console.log(stack)
    return stack.isEmpty()
}

console.log(validParanthesis(str))