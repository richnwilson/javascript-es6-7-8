// Spread - take a spread array parameter and return a list of arguments

const memberPrice = (price, discount = 0.2, tax = 0.06) => {
    return (price - (price * discount)) * (1 + tax).toFixed(2)
}

const data1 = [15, .3, .09];
const data2 = [10, .4];

console.log(memberPrice(...data1))
console.log(memberPrice(...data2))