"use strict";
// Creating class using keyword 'class'
class Person {
    constructor(firstName, lastName, id) {
        this.firstName = firstName; // initialize object's properties
        this.lastName = lastName; // initialize object's properties
        this.id = id; //
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.id}`;
    }
}
const john = new Person('John', 'Doe', 24);
console.log(john.getFullName());
