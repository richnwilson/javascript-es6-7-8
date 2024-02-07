// ** BIGINT
// Regular Integer in Javascript are only accurate up to 15 digits
let oldNum = Number.MAX_SAFE_INTEGER;
++oldNum
console.log(oldNum);
++oldNum
console.log(oldNum);

// BigInt allows for accurate storage of Integers greater than 15 digits
// - either append with 'n' or wrap in BigInt()
// - there is typeof called bigint
let newNum = 9007199254740992n;
++newNum
console.log(newNum);
++newNum
console.log(newNum);
console.log(typeof newNum)


// ** MATCHALL()
// - finds all occurences of string , stored at iterator and can be converted to an array
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
const cats = text.matchAll(/Cats/gi);
console.log(Array.from(cats))

// ** ??
// - Returns first argument is not null or undefined (called nullish), otherwise second
console.log('--- old way---')
console.log(false || 'some truthy value')
console.log(undefined || 'some truthy value')
console.log(null || 'some truthy value')
console.log(NaN || 'some truthy value')
console.log('--- new way---')
console.log(false ?? 'some truthy value')
console.log(undefined ?? 'some truthy value')
console.log(null ?? 'some truthy value')
console.log(NaN ?? 'some truthy value')


// ** ?.
// - optional chaining operator returns undefined if an object is undefined or null (instead of throwing an error)
let x = { prop1: { prop2: 100 }}
console.log(x.prop1?.prop2);
console.log(x.prop1?.nonexistantprop?.keepgoing?.ohyes)
console.log(x.prop1?.functionThatDoesNotExist?.())