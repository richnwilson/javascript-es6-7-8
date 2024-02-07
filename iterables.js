// Variables can be looped over - iterables
// Default iterable types : Array, Map, String, Set, TypedArray
// has a [Symbol.iterator] property, that can be actually set

const aString = "String";
console.log(aString[Symbol.iterator]) // returns a function - yes, I'm iterable
const bObject = {Name: "Rich"}
console.log(bObject[Symbol.iterator]) // returns undefined since not iterable

// for .. of - RETURNS VALUE
for (let letter of aString) {
    console.log(letter)
}

// for .. in - RETURNS KEY
for (let letter in aString) {
    console.log(aString[letter])
}
