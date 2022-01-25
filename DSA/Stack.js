class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek= peek;
    }

    peek() {
        return this.dataStore[this.top-1];
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top]
    }

    clear() {
        this.top=0
    }

    isEmpty() {
        if(this.top === 0){
            return true
        } else {
            return false
        }

    }

    length() {
        return this.top;
    }

}