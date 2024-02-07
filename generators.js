// Function with affix star (*) that stops at yield

const { fchown } = require("fs");

function* aGenerator() {
    console.log("I will run after you set me and then use gen.next()")
    yield 1;
    console.log("I will run after you do another gen.next()")    
}

const gen = aGenerator();
gen.next()
gen.next()

// When executing next() method can return a value back inside function to be that value ??!!
function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        let reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);

// Nested generators
function* male () {
    yield "I am a male, do you like me ?";
    yield "Can I try again, please ?";
}

function* female () {
    yield "Hi, how are you";
    yield* male();
    yield "No, please go away";
    yield* male();
    yield "Oh, okay";
    yield* male();
}

const exchange = female();

// Remember of returns the value and generator returns an object with value and done, so this works
for (let dialog of exchange) {
    console.log(dialog)
}