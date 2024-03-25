"use strict";
function greet33(name, age) {
    console.log(`Hello, ${name}! your are ${age} years old.`);
}
let hi = greet33('Tejas', 27);
// type of parameter
// Optional Parameter
function greet3(name, age) {
    if (name) {
        console.log(`Hello, ${name}! your are ${age} years old.`);
    }
    else {
        console.log(`Hello, Annonymous! and i don't know how old i am.`);
    }
}
let hi1 = greet3(); //Hello, Annonymous!
let hi2 = greet3('Tejas', 27); //Hello, Tejas!
