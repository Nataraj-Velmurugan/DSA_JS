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

let s = "azxxzy";

var removeDuplicates = function(s) {
   let stack = new Stack();
    
  for(let i=0; i<s.length; i++){
    if(stack.peek() === s[i]) stack.pop()
    else stack.push(s[i])
  }
  
  return stack.items.join('');
};

// bruteforce
var removeDuplicates1 = function(s) {
    let st = s.split('');
   for(let i=0; i<st.length-1; i++){
    if(st[i] === st[i+1]){
        st.splice(i, 2);
        i = i-2;
    }
   }
   
   return st.join('');
 };

 console.log(removeDuplicates1(s))