let rings = "G4";

var countPoints = function(rings) {
    let rt = rings.split('');
    let rtObj = {};
    for(let i=0; i<rt.length-1; i+=2){
    rtObj.hasOwnProperty(rt[i+1]) ? rtObj[rt[i+1]].push(rt[i]) : rtObj[rt[i+1]] = [rt[i]]
    }
    let count = 0;

    for(let i in rtObj){
        if(rtObj[i].includes('R') && rtObj[i].includes('B') && rtObj[i].includes('G')) count++
    }

    return count
};

countPoints(rings)