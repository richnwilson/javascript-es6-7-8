// This is called 'Syntactical sugar' - as it's just building on existing Javascript functionality. It's not anything new in ES6.
class SuperHero{
    constructor(name, strength, speed, weapon, cape ) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        this._weapon = weapon;
        this._cape = cape;
    }
    powerUp() {
        this._strength += 5;
    }
    // In javascript, you can't stop someone from retrieving or updating a class value i.e hero1.name = 'Rich' will work, BUT using 'set' and 'get' below is 
    // a more documented way to handle this. When doing that you need to prefix the class names with underscore(_) so you don't get infinite loops
    // Need to repeat for each parameter name above - just showing 'name' below
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName
    }

    // Static method that belongs to class NOT the instance
    static goodHero() {
        return true;
    }
 }

 // Note: We can pass an array of values into class and the '...' destructs to make it an object - cool :)
 let hero1 = new SuperHero(...["Hank",10,5,"fist",true]);
 console.log(`Heros name is ${hero1.name}`);
 // since powerUp is not part of constructor it's not being allocated space for every instance i.e. if we made 1000 heros there would be a 1000 functions.
 hero1.powerUp(5);
 hero1.name = 'Hanky';
 console.log(hero1);

 let hero2 = new SuperHero(...["Phil",20,1,"knife",false]);

 console.log(`Is hero good? ${SuperHero.goodHero()}`)

 // Example of static method

 class DoMath {
    static add(x,y) {
        return x + y;
    }
    static subtract(x,y) {
        return x - y;
    }
    static square(x,y) {
        return x * x;
    }        
 }

 console.log(DoMath.add(3,2))

 // Sub class
 // - Human is same as SuperHero values but needs to have an additional property
 class Human extends SuperHero{
    constructor(healthPoints, ...superHeroStuff) {
        // Go look for parent class i.e SuperHero and send the data
        super(...superHeroStuff);
        this._healthPoints = healthPoints;
    }
 }

 let hero3 = new Human(...[20,"Rich",20,5,"AK47",true]);
 console.log(hero3)