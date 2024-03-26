function greet33(name: string, age: number): void{
    console.log(`Hello, ${name}! your are ${age} years old.`);
}

let hi = greet33('Tejas', 27)


// type of parameter
// Optional Parameter `?` means dose not required parameter in a function
function greet3(name?: string, age?: number){
    if (name){
        console.log(`Hello, ${name}! your are ${age} years old.`);
    }
    else{
        console.log(`Hello, Annonymous! and i don't know how old i am.`)
    }
}

let hi1 = greet3() //Hello, Annonymous! and i don't know how old i am.
let hi2 = greet3('Tejas', 27) //Hello, Tejas! your are 27 years old.
let hi3 = greet3('', 27) //Hello, Annonymous! and i don't know how old i am.


// Default value
function greet4(name: string = "world"){
    console.log(`Hello, ${name}!`)
}

// calling
let hi4 = greet4() // Hello, world!
let hi5 = greet4("Tejas") // Hello, Tejas!


function sum(...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const add1 = sum(1, 2, 3, 4, 5);  // Returns 15 (1 + 2 + 3 + 4 + 5)
const add2 = sum(10, 20, 30);     // Returns 60 (10 + 20 + 30)
const add3 = sum();               // Returns 0 (no arguments provided, default sum is 0)
const add4 = sum(...[54, 5, 4, 12, 32, 88])  // Return 195
console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4); 

// Return type
function add(x: number, y:number): number{
    return x + y;
}

let sum_num = add(10, 20); // 30


