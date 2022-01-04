let salary = [1000,2000,3000]
   
var average = function(salary) {
    salary.sort((a,b) => {return a-b});
    let left = 1, right = salary.length -2;
    let sum = 0;
    while(left <= right) {
        sum += salary[left++]
    }

    return sum/right
};

console.log(average(salary))