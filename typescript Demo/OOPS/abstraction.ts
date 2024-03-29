// Abstarct class and absrtact method

// Example1
abstract class Shape{
    abstract calculateArea(): number; // abstract method with no implementation

    display(): void{
        console.log("Displaying Shape");
    }
}

class Circle1 extends Shape{
    raduis: number;

    constructor(radius: number){
        super();
        this.raduis = radius;
    }

    // Implementing abstract method
    calculateArea(): number {
        return 3.14 * this.raduis ** 2;
    }
}

const Circle2 = new Circle1(5);
console.log(Circle2.calculateArea());
Circle2.display();

console.log(`-----------------------------------------`);

// Example 2
abstract class Printer{
    abstract printDocument(document: string): void;
}

class LeserPrinter extends Printer{
    printDocument(document: string): void {
        console.log(`Printing document using laser printer : ${document}`);
    }
}


const laserPrinter = new LeserPrinter();
laserPrinter.printDocument("Report");