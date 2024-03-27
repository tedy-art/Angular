"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}
// create an instance of Dog
const dog = new Dog("Buddy");
// Accesing properties and methods from Animal(parent class)
dog.move(10);
dog.move();
