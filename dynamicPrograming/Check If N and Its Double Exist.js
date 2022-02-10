var checkIfExist = function(arr) {
    let checkZero = false;
    for(let n of arr){
        if(n == 0){
            if(checkZero)
                return true;
            checkZero = true;
        }
        else if(arr.includes(n*2))
            return true;
    }
    return false;
};