"use strict";
class Animal1 {
    makesound() {
        return "Animal Make sounds";
    }
}
class Dog1 extends Animal1 {
    makesound() {
        return 'woof!';
    }
}
class Cat1 extends Animal1 {
    makesound() {
        return 'meow!';
    }
}
// Function to inrract with animal
function interact(animal) {
    console.log(animal.makesound());
}
const animal = new Animal1();
const dog1 = new Dog1();
const cat = new Cat1();
// Interacting with animals
interact(animal);
interact(dog1);
interact(cat);
