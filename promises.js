// Javascript is an asyncronous language. That's not intuitive for the mind i.e.
setTimeout(()=>console.log('Line 1, 0 timeout'),0);
console.log('Line 2');
setTimeout(()=>console.log('Line 3, 100 timeout'),110);
for (let i = 0; i < 100001; i++) {
    if (i===100000) console.log('Line 4, done with loop')
}
// ^^ Mind expects Line 1 > Line 2 > Line 3 > Line 4, but Javascript gives
//                 Line 2 > Line 4 > Line 1 > Line 3
// Javascript is a single threaded BUT non-blocking process, where will execute immediate calls BUT for anything that may have delay i.e. setTimeout, AJAX, DB etc it puts in Event Queue where
// it checks continually to see if anything is returned i.e. callback
// ... so Javascript sees Line 1 - oh, timeout .. I don't care how long it needs throw it to event queue. Line 2 I can execute immediately.
//     Line 3 is a setTimeout, so add to end of queue, run Line 4, .. now I see Line 1 has completed so return and then Line 4 is done so return


// CALLBACKS - they are 1st class objects and expects a function i.e.

// Side note - functions can be passed as first class objects i.e.
const a = (x) => {
    return function (y) {
        console.log(x*y)
    }
}
a(2)(3)
// ^^ Odd, but when execute a we still have x in local scope and can return a function to a(2) where called so that is passes next parameter as y and we can then execute x*y


const printNumber = (text) => {
    console.log(parseInt(text))
}
const printText = (text) => {
    console.log(text)
}
// Run is a way to execute library functions - pass in function as callback and then execute callback
const run = (callback, text) => {
    callback(text);
}
run(printText, "2");
run(printNumber, 2);

/* CALLBACKS in jQuery, as another example

 1 - Simple button click
 -----------------------
 $(".btn").click(()=> {console.log("done")})
 ^^ The first property of click is a function that will act as a callback in JQuery's execution i.e. something like:
 
 Mock jQuery setup  below:
 const $ = function(selector) {
     :
     :
     :
 }
 const $.prototype.click = function(callback) {
    :
    :
    callback()
 }
 ^^ In otherwords, we pass the callback function to click which jQuery executes when it's done with it's code


 2 - More complex JSON query with parameter URL to send to jQUery and callback to use data returned inside jQuery
 -----------------------
 $.getJSON(url, (data) => {console.log(JSON.stringify(data))})
 
 Mock jQuery setup  below:
 const $ = function(selector) {
     :
     :
     :
 }
 const $.prototype.getJSON = function(url, callback) {
    // jQuery uses url to get data and returns data to lets say a const called ajaxData
    //
    callback(ajaxData)
 }
 ^^ In otherwords, once jQuery has it's data from our URL, execute our callback and run our code for the data

 */

// PROMISES
// is a constructor with some key methods to avoid callback hell.
// Promise holds callback with 2 args - resolve and reject, which themselves are callbacks
const myFirstPromise = new Promise((res,rej) => {
    // do some data calls etc
    const num = Math.floor(Math.random() * 6);
    if (num < 4) {
        res("PROMISE | RESOLVED: Return this")
    } else {
        rej("PROMISE | REJECTED: Failed")
    }
})

console.log("PROMISE | I'm running before Promise")
myFirstPromise.then(data=> {
    console.log(data)
}).catch(err => {
    console.log(err)
})
console.log("PROMISE | I'm last line after Promoise")