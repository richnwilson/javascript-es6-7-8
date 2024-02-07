// Sets always contain unique elements
// They are like arrays and contain iterables i.e. arrays or objects
// Returns object

const a = ["Rich","Amy","Ian","Owen"]
const b = ["Rich","Lucy", "Miso"];

const c = new Set([...a, ...b]);
console.log(c);
console.log(typeof c);