interface OS {
    // Variable Declaration
    name: String;
    language: String;
}
// Method declaration
let OperatingSystem = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language.');
};
let Oreo = {name: 'O', language: 'Java'}
OperatingSystem(Oreo);

let OperatingSystem1 = (type:OS) =>{
    console.log(`Framework ${type.name} has ${type.language} language.`);
};
let Oreo1 = {name:'Angular', language:'TypeScript'};
OperatingSystem1(Oreo1);

// Interface Inheritance
interface Person{
  name: string;
}

interface PersonDetail{
  age: number;
  gender: string;
}

// multiple interface inheritance
interface Employee extends Person, PersonDetail{
  empCode: number;
}

let empObj = <Employee>{};
empObj.name = "Tejas";
empObj.age = 26;
empObj.gender = "Male";
empObj.empCode = 54121

console.log(`Name ${empObj.name}.`); // Name Tejas
console.log(`Employee code: ${empObj.empCode}.`) // Employee code 54121

// Optional properties
interface Employees{
  name: string;
  designation?: string;
  age: number;
}

const employee1: Employees = {
  name: "John",
  age: 30,
};

const employee2: Employee ={
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
function printPerson({ firstName, lastName, age }: { firstName: string, lastName: string, age: number }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

// Calling the function with an object argument
printPerson({ firstName: 'Jane', lastName: 'Doe', age: 25 }); // Name: Jane Doe, Age: 25

// Array destructuring
// Array with values
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, third] = numbers;

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(third); // Outputs: 3

