// Values are values :)
// example

let str = 'Popeye';
let name = str;
name = 'Olive Oil';

console.log(str);
console.log(name);
// |
// name and str store different things as we made a mutable copy of name from str and now it's on it's own path

// Objects are references and immutable. Think of it as the object is stored in memory and referenced by whatever tracks back to it
// example

let obj = {
    name: 'Popeye'
}
let obj2 = obj;
obj.girlfriend = 'Olive Oil';
console.log(obj);
console.log(obj2);
// |
// Even though we only changed obj since obj2 is a 'reference' it will update obj2 as well