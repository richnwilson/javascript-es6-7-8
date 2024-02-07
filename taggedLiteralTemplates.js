const buildHTML = (strings, ...expr) => {
    console.log(strings);
    console.log(expr)
}

const beg = ['a','b','c'];
const end = ['x','y','z'];
console.log(buildHTML`<li>${beg}${end}</li>`);


const testFunction = () => {
    return `Rich`;
}
const taggedCallBack = (strings, func) => {
    return `${strings[0]}${func()}`
}

console.log(taggedCallBack`James Phil ${() =>testFunction()}`)