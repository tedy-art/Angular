"use strict";
// Abstarct class and absrtact method
// Example1
class Shape {
    display() {
        console.log("Displaying Shape");
    }
}
class Circle1 extends Shape {
    constructor(radius) {
        super();
        this.raduis = radius;
    }
    // Implementing abstract method
    calculateArea() {
        return 3.14 * this.raduis ** 2;
    }
}
const Circle2 = new Circle1(5);
console.log(Circle2.calculateArea());
Circle2.display();
console.log(`-----------------------------------------`);
// Example 2
class Printer {
}
class LeserPrinter extends Printer {
    printDocument(document) {
        console.log(`Printing document using laser printer : ${document}`);
    }
}
const laserPrinter = new LeserPrinter();
laserPrinter.printDocument("Report");
