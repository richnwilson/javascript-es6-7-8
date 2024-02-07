const PI = {
    name: 'Rich',
    last: 'Wilson',
    age: 54,
    specs() {
        return `${this.name} ${this.last} is ${this.age} years old`
        }
};

console.log(PI.specs());