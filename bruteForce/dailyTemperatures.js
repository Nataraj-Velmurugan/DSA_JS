let temperatures = [55,38,53,81,61,93,97,32,43,78];
  

// time limit exceeded
var dailyTemperatures = function(temperatures) {
    let Stack = [];
    let result = [];
    if(temperatures.length === 1) return [0]
    if(temperatures.length === 2) {
        if(temperatures[temperatures.length - 2] < temperatures[temperatures.length-1]){
            return [1,0]
        } else {
            return [0,0]
        } 
    }

    for(let i=0; i<temperatures.length-1; i++){
        let counter = i;
        let insertFlag = false;

        while(counter < temperatures.length){
            if(temperatures[counter+1] !== undefined) Stack.push(temperatures[counter+1])

            if(temperatures[i] < Stack[Stack.length -1]) {
                result.push(Stack.length)
                Stack = [];
                insertFlag = true;
                break;
            }
            counter++;
        }

        if(insertFlag === false) {
            result.push(0)
            Stack = [];
        }
    }

    result.push(0)
    return result
};

// optimized

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

let temperatures = [30,40,50,50];
  
var dailyTemperatures = function(temperatures) {

let days = new Stack();
let output = [];
for(let i = 0; i<temperatures.length; i++){           
    while(!days.isEmpty() && temperatures[days.peek()] < temperatures[i]) {
        output[days.peek()] = i - days.pop(); 
    }
    days.push(i);
}

// for(let i = 0; i<temperatures.length; i++){           
//     if(temperatures[i] < temperatures[i+1]) output[i] = 1;
//     else{
//         let j = i+2;
//         while(j< temperatures.length && temperatures[i] >= temperatures[j]) j++;
//         if(j < temperatures.length && temperatures[i] < temperatures[j]) output[i] = j-i;
//     }
// }
return output;

}

console.log(dailyTemperatures(temperatures))