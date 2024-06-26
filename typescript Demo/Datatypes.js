"use strict";
// we can declare variable before declaring it's value
let fname;
// Declaring sting values
fname = 'Tejas';
// method we can use on string
let newname = fname.toUpperCase();
console.log(newname);
console.log('lower : ', newname.toLowerCase());
console.log('trim : ', newname.trim());
console.log('length : ', newname.length);
//Numbers
// declaration of data type
let age;
age = 25;
age = 25.5;
console.log('age : ', age);
// Convert string to number
let en_marks = "68";
let Convert_to_int = parseInt(en_marks);
console.log('mark of English : ', Convert_to_int);
// Boolean
// in TS we can't declare only boolean varable without it's Type. it will give an error.
// let isValid : boolean; // error
let isValid = false;
console.log(isValid);
// Arrays
// Declaring an empty array
let emp_list = [];
emp_list = ['Tejas', 'Ajay', 'Harish'];
console.log('Employee List : ', emp_list);
// Declaring an array of string
let str_list;
str_list = ['new', 'present', 'old'];
console.log('String List : ', str_list);
// Another way Declaring an array
let nums_list;
nums_list = [12, 54, 65, 87, 45, 12];
console.log('numbers list : ', nums_list);
// Operation on array
let result = nums_list.filter((nums_list) => nums_list > 12);
console.log(result);
// enum
// Defining an enum named Color
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Using the enum
let myColor = Color.Green;
console.log(myColor); // Output: 1 (the numeric value of Green)
// Accessing enum values by name
let colorName = Color[myColor];
console.log(colorName); // Output: Green
// Tuple
// Declaring a tuple
let employee;
// Initializing the tuple
employee = ["John Doe", 30];
// Accessing tuple elements
console.log(employee[0]); // Output: John Doe
console.log(employee[1]); // Output: 30
// Updating tuple elements
employee[0] = "Jane Smith";
employee[1] = 35;
// Tuple with specific types for each element
let person;
person = ["Alice", 25, true];
// Any
console.log("Any : ");
let notSure = 4; // number datatype
notSure = "maybe a string instead"; //string datatype
notSure = false; // Now it's a boolean
let dynamicArray = [1, "hello", true]; // Array of any type
function dynamicFunction(arg) {
    // Function that returns any type
    return arg;
}
let result1 = dynamicFunction("hello"); // result can hold any type of value
// Void
function greet(name) {
    console.log("Hello, " + name + "!");
}
function log(message) {
    console.log(message);
}
let result2 = greet("Alice"); // Result is undefined because greet function does not return a value
log("This is a log message"); // This function also returns void
