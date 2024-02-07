const data = {
    a: 1,
    b: 2,
    c: 3
}

const justShow = ({a}) => {
   return a;
}

console.log(justShow(data))

// Nested destructering and renaming
const PI = {
    name: 'Rich',
    last: 'Wilson',
    hobbies: ['cycling', 'soccer', 'running'],
    foodRatings: {
        pasta: 'great',
        icecream: 'okay'
    }
}

const { hobbies: { [0] : firstHobby}, foodRatings: { pasta }} = PI;
console.log(`Favorite first hobby is ${firstHobby} and my thoughts on pasta are that it is ${pasta}`)

// Destructering in functions
const getArea = ({width, height}) => {
    return `width is ${width} and height of ${height} makes an area of ${height * width}`
}

console.log(getArea({height: 4, width: 5}))
console.log(getArea({width: 4, height: 5}))