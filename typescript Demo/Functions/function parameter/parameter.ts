function greet33(name: string, age: number): void{
    console.log(`Hello, ${name}! your are ${age} years old.`);
}

let hi = greet33('Tejas', 27)


// type of parameter
// Optional Parameter
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
