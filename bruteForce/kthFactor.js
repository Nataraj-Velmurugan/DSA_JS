let n = 4, k = 4;
var kthFactor = function(n, k) {
    let factorsList = [];
      for(let i=1; i<n+1; i++) {
        if(n%i === 0) {
          factorsList.push(i)
        }
      }
    console.log(factorsList)
    if(factorsList[k-1] === undefined) return -1
    return factorsList[k-1]
  };

  console.log(kthFactor(n,k))