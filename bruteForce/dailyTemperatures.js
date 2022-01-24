let temperatures = [55,38,53,81,61,93,97,32,43,78];
  
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