// Object.values() and Object.entries()
const footballer = {
    name: 'Wayne Rooney',
    position: 'Forward',
    club: 'Man U',
    scoringAverage: 1.2
}
console.log(Object.values(footballer));
console.log(Object.entries(footballer));

// padEnd() and padStart()
const name = 'Wayne Rooney';
console.log(name.padEnd(20,'-')) //Pad field to 20 chars and fill with blanks (Default). Add 2nd param for different character than space
console.log(name) // Does not mutate original variable
// - padStart works same way but as prefix


// Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(footballer))

// Trailing commas in functions
// - Can already add commas to last field in arrays or objects
const sum = (x,y,) => {
    return x + y
}
console.log(sum(2,3,))