const arr = [1,2,3,10,11,12];

// Array
console.log(Array(7))

// for .. of
for (const item of arr) {
    console.log(item);
}

// Array.from
const lines = Array.from(arr,(line)=> `<li>${line}</li>`)
console.log(lines);

// Array and Array.from
console.log(Array.from(Array(10),(i=>'I appear 10 times')))
