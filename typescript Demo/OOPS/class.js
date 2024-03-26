"use strict";
// Creating class using keyword 'class'
class Person {
    constructor(firstName, lastName, id) {
        this.firstName = firstName; // initialize object's properties
        this.lastName = lastName; // initialize object's properties
        this.id = id; // initialize object's properties
    }
    // We can create a method as well
    // to that we have to give that method name folloewed by round bracket then it's data type
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.id}`;
    }
}
const john = new Person('John', 'Doe', 24);
console.log(john.getFullName());
