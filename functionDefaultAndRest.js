// Default
const getArea = (x,y,s = 'r') => {
    return s === 'r' ? x*y : (x*y)/2;
}

console.log(getArea(5,2));

// Rest - takes remaining arguments are returns array of them. See spread.js for alternate 
const findHighest = (upper, ...rest) => {
    return Math.max(...rest.filter(i=>i < upper));
}

/*
                       upper      rest   
                         |  -----------------         
*/
console.log(findHighest(80,90,50,6,0,12,78,81));