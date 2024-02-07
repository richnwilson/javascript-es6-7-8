const aString = "Hello";
//console.log(aString.next()); // ERROR - String is iterable BUT NOT an iterator

// Can make a string an iterator by return iterable function
// .next() moves to next iterator and returns it as an object with value and done, a boolean set to True is we have completed
const first = aString[Symbol.iterator]().next();
console.log(first);


// MORE COMPLETE EXAMPLE
const makeRangeIterator = (start, end, step) => {
    let nextIndex = start;
    let returned = false;
    return {
        next: () => {
            let result = {};
            if (nextIndex < end) {
                result =  {
                    value: nextIndex,
                    done: false
                }
                nextIndex += step;
            } else if (!returned) {
                result = {
                    value: nextIndex,
                    done: true
                }
                returned = true
            } else {
                result = {
                    done: true
                }
            }
            return result;
        }
    }
}

const it = makeRangeIterator(1,10,2);

let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}

console.log("Iterated over sequence of size", result.value)