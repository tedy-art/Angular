"use strict";
// Method declaration
let OperatingSystem = (type) => {
    console.log('Android ' + type.name + ' has ' + type.language + ' language.');
};
let Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
let OperatingSystem1 = (type) => {
    console.log(`Framework ${type.name} has ${type.language} language.`);
};
let Oreo1 = { name: 'Angular', language: 'TypeScript' };
OperatingSystem1(Oreo1);
let empObj = {};
empObj.name = "Tejas";
empObj.age = 26;
empObj.gender = "Male";
empObj.empCode = 54121;
console.log(`Name ${empObj.name}.`); // Name Tejas
console.log(`Employee code: ${empObj.empCode}.`); // Employee code 54121
const employee1 = {
    name: "John",
    age: 30,
};
const employee2 = {
    name: "Jassica",
    designation: "Sw Developer",
    age: 25
};
console.log(employee1);
console.log(employee2);
// Object destructuring
const PersonInfo = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};
// destructuring assignment
const { firstName, lastName, age } = PersonInfo;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 30
// Function with object parameter
function printPerson({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}
// Calling the function with an object argument
printPerson({ firstName: 'Jane', lastName: 'Doe', age: 25 });
