let data = [3,4,6,2,4,2];

let frequencySort = (data) => {
    let dataObj = {};
    for(let i=0; i<data.length;i++){
        dataObj.hasOwnProperty(data[i]) ? dataObj[data[i]] = dataObj[data[i]] + 1 : dataObj[data[i]] = 1
    }

    let dataArr = [];
    for(let i in dataObj){
        dataArr.push(dataObj[i])
    }
    dataArr.sort((a,b) => {return a-b})
    
    let newArr = [];
    for(let i=0; i<dataArr.length; i++) {
        let objKey = Object.keys(dataObj).find(key => dataObj[key] === dataArr[i])
        let customArr = Array(dataArr[i]).fill(parseInt(objKey))
        newArr = [...newArr, ...customArr]
        delete dataObj[objKey]
    }

    return newArr

}

console.log(frequencySort(data));