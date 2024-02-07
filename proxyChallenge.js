const fs = require('fs');

// SET

let manager = {
    office: "Dubai",
    dept: "Sales",
    employees: 0
}

const handlerSet = {
    set: (target, propname, newValue) => {
        if (propname === 'employees') {
            if (Array.isArray(newValue) || newValue === null || typeof newValue === 'String') {
                return target[propname] = newValue;
            } else {
                throw new TypeError ("Must be an array, string or null")
            }
        }
        return target[propname] = newValue;
    }
}
const updateManager  = new Proxy(manager, handlerSet);
// updateManager.office='London'; - WORKS, UPDATES DATA
// updateManager.employees = ['Rich','Andy','Tony'] - WORKS, UPDATES DATA
// updateManager.employees = 3 - WORKS, THROWS ERROR
// updateManager.employees = null - WORKS, UPDATES DATA
// updateManager.employees = {name: "Rich"} - WORKS THROWS ERROR
// console.log(manager);

// APPLY
const importantFunction = (a,b) => {
	console.log("Important stuff here. No need to change.")
}

const handlerFn = {
    apply: (target, thisArg, argsList) => {
        try {
            let obj=[];
            if (fs.existsSync('./proxyLog.json')) {
                obj = JSON.parse(fs.readFileSync('./proxyLog.json', 'utf8'));
            } 
            fs.writeFileSync('./proxyLog.json', JSON.stringify([...obj, {name: target.name, params: argsList, date: new Date()}]))
            return target(...argsList);
        } catch(e) {
            console.log(e);
        }
    }
}

const importantFunctionProxy = new Proxy(importantFunction, handlerFn)
//importantFunctionProxy("a","b")

// GET
const users = [
	{
		username: `bob`,
		accessLevel: 1,
		accessCode: 1234
	},
	{
		username: `Mary`,
		accessLevel: 2,
		accessCode: 2345
	},
	{
		username: `Harold`,
		accessLevel: 2,
		accessCode: 9999
	},
]

const handlerGet = {
    get: (target,propname) => {
        if (target[propname].accessLevel === 1) return { username: "DENIED", accessLevel: "DENIED", accessCode: "DENIED"}
        return target[propname]
    }
}
const usersProxy = new Proxy(users,handlerGet);

// console.log(usersProxy[0].accessLevel) - WORKS TO RETURN DENIED AS ACCESS LEVEL == 1
// console.log(usersProxy[1]) - WORKS AS RETURNS DATA SINCE ACCESS LEVEL > 1