class Stack {
    constructor() {
        this.items = [];
    }

    peek(){
        return this.items[this.items.length-1];
    }

    push(element){
        this.items.push(element);
    }

    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    clear() {
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0;
     }

    size() {
        return this.items.length;
    }

}
