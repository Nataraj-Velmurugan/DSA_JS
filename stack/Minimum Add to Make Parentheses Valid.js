let s = "((("

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


var minAddToMakeValid = function(s) {
    let sObj = {
        ')': '('
    }

    let stack = new Stack();
    for(let i=0; i<s.length; i++){
        if(!stack.isEmpty()){
            if(stack.peek() === sObj[s[i]]) stack.pop()
            else stack.push(s[i])
        }else {
            stack.push(s[i])
        }
    }

    return stack.size()
};

minAddToMakeValid(s)