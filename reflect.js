// Reflect
// - while program is running, reflect makes decisions by examining and modifying your dynamic program at runtime - like typeof to determine action based on the result
// - global object that has methods that work with proxy handler i.e. get, set, apply, has etc
const monster = {
    secret: 'kills silently',
    power: 5
}
//console.log(Reflect.get(monster,"secret"))

// Clever example with Proxy
let handler = {
    get: (target, propname) =>  {
        if (propname === 'secret') {
            return `${target.secret.substr(0,5)}...`;
        } else {
            return Reflect.get(...arguments);
        }
    }
}

const monsterProxy = new Proxy(monster,handler);
console.log(monsterProxy.secret)
console.log(monsterProxy.power)
console.log(monsterProxy);