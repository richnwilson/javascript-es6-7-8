// literals that maintain order. Key with a value
let myContacts = new Map();
myContacts.set("Rich","720-984-2175");
myContacts.set("Amy","720-988-0941");

console.log(myContacts.get("Rich"))
console.log(`MyContacts length is - ${myContacts.size}`)

// Can loop through maps as iterable
for(const [key, value] of myContacts) {
    console.log(`Hey ${key} is your phone number ${value}`)
}

console.log(myContacts.keys())
console.log(myContacts.values())

// maps can contains any type of values in keys and values i.e.

let myNames = new Map();
myNames.set({nickName: "Rich", lastName: "Wilson"}, "IBM");
for(const [key, value] of myNames) {
    console.log(`Hey ${key.nickName} ${key.lastName} you work at ${value}`)
}

console.log(myNames);

// Can remove everything
myContacts.clear();