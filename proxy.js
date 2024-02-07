// proxy constructor is new to ES8
// --- can hijack process of object change using traps. If no properties applied , then use default obj methods
// --- creates middleware
// --- allows you to create a custom object with specific rules

let handler = {
    // This is the property when you want to get values from object i.e. newObj.name. The target is the object and propname is the key inside the object i.e. name
    get: (target, propname) =>  {
        return `${target[propname]}----`;
    },
    set: (target,propname, newValue) => {
        target[`${propname}---`] = newValue;
        target[propname] = newValue;
    },
    has: (target, propname) => {
        console.log("Checking if has...");
        return true;
    }
}
//                           | What custom properties do we want to control on this new object
let newObj = new Proxy({},handler);
//                      ^ - object to work on, empty to start but could be instantiated
newObj.name = "Rich";
newObj.job = "Developer";
console.log(newObj.name)
console.log(newObj["name---"])

if ("name" in newObj)  console.log("Found it")


// Advanced example  --- applying proxy to function
//-- Remember function is 1st class object so can we used as first argument in proxy

const handlerFn = {
    apply: (target, thisArg, argsList) => {
        return target(...argsList)
    }
}

const sum = (x, y, z) => {
    return x + y + z;
}

const sumProxy = new Proxy(sum, handlerFn)

console.log(sum(2,9,1))
console.log(sumProxy(2,9,1))