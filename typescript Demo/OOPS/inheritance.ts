class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    move(distance: number = 0): void{
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }

    bark():void{
        console.log(`${this.name} barks`);
    }
}

// create an instance of Dog
const dog = new Dog("Buddy");

// Accesing properties and methods from Animal(parent class)
dog.move(10);

dog.move();

/*
Types of inheritance:
1) Single inheritance 
2) Multilevel Inheritance
3) Hierarchical inheritance 
4) Hybried Inheritance(Using interfaces)
*/