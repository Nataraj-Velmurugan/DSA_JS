
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

let str = "3[a2[c]]"

var decodeString = function(str) {
    let stack = new Stack();
	let ch = str.split('');
		
		for (let i = 0; i < ch.length; i++) {
			
			if(ch[i] != ']') {
				stack.push(ch[i]);
			} else {
				let lst = [];
				while(stack.peek() != '[') {
					lst.push(stack.pop());
				}
				// pop the next char --> this is the opening bracket
				stack.pop();
				
				// Get the frequency 
				let freq = "";
				while(!stack.isEmpty() && !isNaN(stack.peek())) 	{			
					freq = stack.pop() + "" + freq;
				}
				
				let k = 1;
				if(freq != "") k = parseInt(freq);
				
				while(k > 0) { // push it back to the stack
					for (let j = lst.length - 1; j >= 0 ; j--) {
						stack.push(lst[j]);
					}
					k--;
				}
			}

            console.log(stack.items)
		}
		//System.out.prletln(stack);

		let sb = '';
		while(!stack.isEmpty()) {
			sb = sb + stack.pop();
		}
		
		return sb.split("").reverse().join("");
    
};

console.log(decodeString(str))
