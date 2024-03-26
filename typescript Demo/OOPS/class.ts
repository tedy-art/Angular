// Creating class using keyword 'class'
class Person {
    // firstName and lastName are properties of the class
    firstName : string; // property 1
    lastName : string; // property 2
    id : number; // property 3
    constructor(firstName: string, lastName : string, id : number){
        this.firstName = firstName; // initialize object's properties
        this.lastName = lastName; // initialize object's properties
        this.id = id; // initialize object's properties
    }

    // We can create a method as well
    // to that we have to give that method name folloewed by round bracket then it's data type
    getFullName(): string {
        return `${this.firstName} ${this.lastName} ${this.id}`;
    }
}

const john = new Person('John', 'Doe', 24);
console.log(john.getFullName());


