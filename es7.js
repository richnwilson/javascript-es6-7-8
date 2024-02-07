// Exponentiation
const x = 2 * 2 * 2 * 2 * 2;
const new_x = 2 ** 5;
console.log(x);
console.log(new_x);

// Includes
console.log([1,2,3,4,5].includes(1));

// Destrusture rest parameters
const sum = (...[a,b]) => {
    return a + b;
}

console.log(sum(2,3))