# [ANGULAR]
<hr>
<hr>

**What is Angular??**
1) A UI framework build by google.
2) A component-based framework for building scalable app.
3) Provided collection of libraries to cover features like Routing, Forms.

**Evolation :**

2009 -> name: angularjs -> using JavaScript lanugage -> 2014 end of angular js

2014 -> name: angular v 2.0 or angular -> in evrey 6 month angular update it's features -> using TypeScript -> now we using it

*'Angular is written in TypeScript language.'*
<hr>

# [TypeScript]:
<hr>

**Intro of TS:**

1) Strongly typed programing language.
2) Created and maintained by Microsoft.
3) Superset of JavaScript.

**Why TS:**

1) Complies to JS.
2) Keeps your code evergreen. [means: we can run our old code on browser and most of the code run without an issue]
3) Supported by all major libraries and framework.

**Installing and creating first TypeScript Program :**

1) install Node
2) Use latest version of Nodejs
3) `npm init` to create a package.json
4) install TS `npm i typescript`
5) initialize TypeScript
6) `tsc --init`

**Singel Page Application(SPA):**

**What is SPA??**
1) SPA = Single Page Application
2) You can use modern framework like Angular, React, or Vue to create SPA.
3) SPA dose not make request to server for every URL requests.

**How Angular Helps??**

1) Angular has Routing functionality to create SPA.
2) Angular also offer SSR(Server Side Rendering) which support SPA.

<hr>

# [Data Types :]

<hr>

1) string
2) numbers
3) boolean
4) array
5) enum
6) tuple
7) any
8) void
9) never

**1) String :**
```TypeScript
// we can declare variable before declaring it's value
let fname : string;

// Declaring sting values
fname = 'Tejas';

// method we can use on string
let newname = fname.toUpperCase();
console.log(newname)


console.log('lower : ',newname.toLowerCase());
console.log('trim : ',newname.trim());
console.log('length : ',newname.length);
```

**2) numbers :**
```TypeScript
//Numbers
// declaration of data type
let age : number;

age = 25;
age = 25.5;
console.log('age : ', age);

// Convert string to number
let en_marks = "68";
let Convert_to_int = parseInt(en_marks);
console.log('mark of English : ',Convert_to_int);
```

**3) Boolean :**
```TypeScript
// in TS, we can't declare only boolean varable without it's Type. it will give an error.
// let isValid : boolean; // error
let isValid : boolean = false;

console.log(isValid);
```

**4) Arrays :**
```TypeScript
// Arrays
// Declaring an empty array
let emp_list = [];
emp_list = ['Tejas', 'Ajay', 'Harish'];
console.log('Employee List : ',emp_list);

// Declaring an array of string
let str_list : string[];
str_list = ['new', 'present', 'old'];
console.log('String List : ',str_list);


// Another way Declaring an array
let nums_list : Array<number>;
nums_list = [12, 54, 65, 87, 45, 12];
console.log('numbers list : ',nums_list);

// Operation on array
let result = nums_list.filter((nums_list)=> nums_list>12);
console.log(result);
```

**5) Enum :**
In TypeScript, an `enum` (short for enumeration) is a way to define a set of named constants. Enums are a useful feature for representing a group of related values that are known at compile time. Enums provide readable and self-descriptive names to numeric values, making the code more expressive and maintainable.

Here's an example of how to define and use an enum in TypeScript:

```typescript
// Defining an enum named Color
enum Color {
  Red,
  Green,
  Blue
}

// Using the enum
let myColor: Color = Color.Green;
console.log(myColor); // Output: 1 (the numeric value of Green)

// Accessing enum values by name
let colorName: string = Color[myColor];
console.log(colorName); // Output: Green

// Using enum values in switch case
switch (myColor) {
  case Color.Red:
    console.log("The color is Red");
    break;
  case Color.Green:
    console.log("The color is Green");
    break;
  case Color.Blue:
    console.log("The color is Blue");
    break;
  default:
    console.log("Unknown color");
}
```

In this example:
- We define an `enum` named `Color`, which contains three members: `Red`, `Green`, and `Blue`.
- Each member of the enum is assigned a numeric value starting from 0 by default. In this case, `Red` is 0, `Green` is 1, and `Blue` is 2.
- We assign the `Green` value from the `Color` enum to the variable `myColor`.
- We can access enum values by their names (`Color.Green`) or by their numeric values (`Color[1]`).
- We demonstrate using enum values in a switch-case statement for better readability.

Enums in TypeScript are not restricted to numeric values; you can explicitly assign string or numeric values to enum members if needed. Additionally, TypeScript provides flexibility in customizing the numeric values or starting values for enum members.

**6) Tuple :**

In TypeScript (TS), a tuple is a data structure that allows you to store a fixed-size collection of elements of different types. Unlike arrays, which can store multiple elements of the same type and have variable length, tuples have a fixed length and each element can have its own specific type.

Here's a basic example of how to define and use a tuple in TypeScript:

```typescript
// Declaring a tuple
let employee: [string, number];

// Initializing the tuple
employee = ["John Doe", 30];

// Accessing tuple elements
console.log(employee[0]); // Output: John Doe
console.log(employee[1]); // Output: 30

// Updating tuple elements
employee[0] = "Jane Smith";
employee[1] = 35;

// Tuple with specific types for each element
let person: [string, number, boolean];
person = ["Alice", 25, true];
```

In this example:
- We declare a tuple `employee` that can hold a string (representing the employee's name) and a number (representing the employee's age).
- We initialize the tuple with values `"John Doe"` and `30`.
- We access elements of the tuple using index notation (`employee[0]` and `employee[1]`).
- We update the elements of the tuple.
- We also declare a tuple `person` with specific types for each element (`string`, `number`, and `boolean`).

It's important to note that tuples in TypeScript provide a way to express fixed-size arrays where the order of the elements is significant. However, using tuples may reduce code readability in some cases, so they should be used judiciously, especially when the meaning of the elements may not be immediately obvious from their positions.


**7) Any :**

In TypeScript, 
- the `any` data type is a special type that represents a value of any data type. 
- Variables of type `any` can hold values of any data type, and TypeScript compiler doesn't perform type checking on these variables.
- This means that you can assign any value to a variable of type `any`, and TypeScript will not raise any compile-time errors or warnings related to type compatibility.

Here's an example of using the `any` data type:

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // Now it's a boolean

let dynamicArray: any[] = [1, "hello", true]; // Array of any type

function dynamicFunction(arg: any): any {
    // Function that returns any type
    return arg;
}

let result: any = dynamicFunction("hello"); // result can hold any type of value
```

- While using `any` can be convenient when working with values of unknown or dynamic types, it comes with some trade-offs. 
- Specifically, using `any` can bypass TypeScript's static type checking, which can lead to runtime errors if incompatible operations are performed on variables of type `any`. 
- Therefore, it's generally recommended to avoid using `any` when possible and instead opt for more specific types to take advantage of TypeScript's type safety features. 
- However, there are cases where using `any` may be necessary, such as when working with third-party libraries that lack TypeScript definitions or when dealing with data of unknown types.

**8) Void :**

In TypeScript, 
- the `void` data type is used to indicate the absence of any type. 
- It is typically used as the return type of functions that do not return a value. 
- Functions with a return type of `void` can return `undefined` or no value at all.

Here's an example of using the `void` data type:

```typescript
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}

function log(message: string): void {
    console.log(message);
}

let result: void = greet("Alice"); // Result is undefined because greet function does not return a value

log("This is a log message"); // This function also returns void
```

In this example:
- The `greet` function takes a `name` parameter of type `string` and logs a greeting message to the console. Since the function does not return a value, its return type is specified as `void`.
- Similarly, the `log` function takes a `message` parameter of type `string` and logs the message to the console. It also has a return type of `void`.

- Using the `void` return type can be useful for functions that perform actions without producing a result that needs to be used elsewhere in the code. 
- It helps enforce clarity and intention in your function signatures, indicating to other developers that the function does not return a meaningful value.

**9) Never :**

In TypeScript, 
- there is no specific "never" data type. 
- However, TypeScript has a special type called `never` that represents the type of values that never occur. 
- The `never` type is used to indicate values that do not exist or functions that never return a value or always throw an error.

Here's how `never` is typically used:

1. **Functions that never return:**
   ```typescript
   function throwError(message: string): never {
       throw new Error(message);
   }
   ```
   In this example, the function `throwError` always throws an error and never returns a value. Therefore, its return type is `never`.

2. **Functions that never complete:**
   ```typescript
   function infiniteLoop(): never {
       while (true) {
           // Infinite loop
       }
   }
   ```
   This function `infiniteLoop` never completes its execution because it's an infinite loop. It never returns, so its return type is `never`.

3. **Type guards:**
   ```typescript
   function isString(value: any): value is string {
       return typeof value === "string";
   }
   ```
   Here, `isString` is a type guard function that checks if the value passed to it is of type `string`. If the condition is true, it returns `true`, narrowing the type of the value to `string`. If the condition is false, it returns `false`, and the type of the value remains unchanged. The return type of this function is `boolean`, but the use of the `never` type comes into play when it's used in type checking.

- The `never` type is useful for handling scenarios where a value or a function is expected never to occur or never to complete its execution.
- It helps TypeScript perform more accurate type checking and can be used to express certain program behaviors more precisely.

<hr>

# Functions :

<hr>

1) Different ways to write functions
2) Generic Function
3) Optional Parameter
4) Required Parameter
5) Rest Parameter

**What is a function??**
- a function is a block of organized, reusable that is used to perform a single related action.

**Syntax :**
- you can define a function using the `function` keyword or arrow function syntax:

*Simple function syntax :*
```typescript
function greet(name: string): void {
  console.log("Hello,"+ name +!);
}
```

*arrow function syntax :*
```typescript
let multiply = (x: number, y:number): number => {
  return x * y;
}
```

**Parameters :**

- Parameters in function served as a pleaceholders for values that will be passed into the function when it is called.
- parameters are allow you to provide inputs to the function, which the function can then use to perform it's operations.
- You can specify types to enforce type checking.

**Defining Parameter :**

*syntax :*
```typescript
function function_name(parameter1: type, parameter2: type): void{
  expression
}
```

```typescript
// Defining function
// name and age is parameter
function greet33(name: string, age: number): void{
    console.log(`Hello, ${name}! your are ${age} years old.`);
}

let hi = greet33('Tejas', 27)
```
Output:
```
Hello, Tejas! your are 27 years old.
```

**Parameter Types :**

- Optional Parameters
- Default Parameters
- Rest Parameters

1) Optional Parameters : 

    - you can mark parameter optional by appending `?` to their name. e.g. name?, age?
    - Optional parameter allow you to call a function with or without providing a value as a parameter.
    ```typescript
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
    ```

2) Default parameter

    - TS allows you to provide default values for parameter.
    - If value is not povided for a parameter when a function is called, the default value will be used.

    ```typescript
    function greet4(name: string = "world"){
        console.log(`Hello, ${name}!`)
    }

    // calling
    let hi4 = greet4() // Hello, world!
    let hi5 = greet4("Tejas") // Hello, Tejas!
    ```

3) Rest Parameter:

    - TS supports rest parameter which allow you to represent an indefinite number of arguments as an array.
    - Rest parameters are denoted by three dot(`...`) followed by the parameter name.
    ```typescript
    function sum(...numbers: number[]) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    const add1 = sum(1, 2, 3, 4, 5);  // Returns 15 (1 + 2 + 3 + 4 + 5)
    const add2 = sum(10, 20, 30);     // Returns 60 (10 + 20 + 30)
    const add3 = sum();               // Returns 0 (no arguments provided, default sum is 0)
    ```

**Return Type :**
You can specify the return type of a function using `: return type`.

```typescript
// `: number` is a return type of add function.
function add(x: number, y:number): number{
    return x + y;
}

let sum_num = add(10, 20); // 30
```

# Classes :

In TypeScript:
    - classes are fundamental feature of object-oriented programming(OOP) that allow you to create blueprints for objects.
    - They provide a way to define both the structure(properties) and behavior(methods) of objects in a clear and reusable manner.

    **constructor :** 
        
        - A constructor ia a special function that exists inside a class,that is called only once when the object is created.
        - classes are uniqe, and therefore so are the constructor function calls.

Ex.
```typescript
// Creating class using keyword 'class'
class Person {
    // firstName and lastName are properties of the class
    firstName : string; // property 1
    lastName : string; // property 2
    id: number
    constructor(firstName: string, lastName : string){
        this.firstName = firstName; // initialize object's properties
        this.lastName = lastName; // initialize object's properties
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = new Person('John', 'Doe');
console.log(john.getFullName());
```

**Methods in class :**

- We can create a method as well
- to that we have to give that method name followed by round bracket`` then it's data type

syntax:
```typescript
..class..
...

    methodname(): datatype{
      expressions
    }
...
...
```

Example :
```typescript
class Person {
    firstName : string;
    lastName : string;
    id: number
    constructor(firstName: string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Creating method new method
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = new Person('John', 'Doe');
console.log(john.getFullName());
```

**Class Instance :**

```typescript
class MyClass {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}!`;
  }
}

// Create an instance of MyClass using `new` keyword
const instance = new MyClass("world");

// Call the greet method of the instance
console.log(instance.greet()); // Outputs: Hello, world!
```

<h4>types of Inheritance</h4>

# 1) inheritance :

In Ts:
    - you can achive inheritance by using the `extends` keyword.
    - This allow a class(child class) to inherit properties and methods from another class(parent class)

Ex. of inheritance :
```typescript
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
dog.move(10); // Buddy moved 10 meters

dog.move(); // Buddy moved 0 meters
```

**Types of Inheritance :**
1) Single inheritance 
2) Multilevel Inheritance
3) Hierarchical inheritance 
4) Hybried Inheritance(Using interfaces)

<hr>

1) Single Inheritace:
    - TypeScript supports single inheritance, where a class can inherit from only one superclass.
    - This is most common inheritance.

    Syntax:
    ```typescript
    class Animal {
    // superclass
    }

    class Dog extends Animal {
    // subclass
    }
    ```

2) Multilevel Inheritance:
    - This involves a chain of inheritance, where a subclass(parent class) inherits from a superclass(grand parent class), and another subclass(grand child class) inherits from that subclass(parent class), forming a hierarchy.

    ```typescript
    class Animal {
      // superclass
    }

    class Mammal extends Animal {
      // subclass
    }

    class Dog extends Mammal {
      // subclass
    }
    ```

3) Hierarchical Inheritance : 
    - In this type of inheritance, multiple subclasses inherit from a single superclass.

    ```typescript
    class Animal {
      // superclass
    }

    class Dog extends Animal {
      // subclass
    }

    class Cat extends Animal {
      // subclass
    }
    ```

4) Hybrid Inheritance (Using Interfaces): 
    - TypeScript supports hybrid inheritance through the use of interfaces.
    - While classes can't directly inherit from multiple classes, they can implement multiple interfaces, allowing for a form of multiple inheritance.

    ```typescript
    interface Walkable {
      walk(): void;
    }

    interface Flyable {
      fly(): void;
    }

    class Bird implements Walkable, Flyable {
      walk(): void {
        console.log("Bird walks");
      }

      fly(): void {
        console.log("Bird flies");
      }
    }
    ```

# Encapsulation : 

- Encapsulation refers to the bunding of data (properties) and methods(function) that operate the data in a single unit, known as class.
- Access modifiers control the visability of these memebers within the class and from the outside class.

*TypeScript Supports tree acces-modifiers :*
1) public 
2) private
3) protected


1. public:
  - members marked as `public` are accessible from outside the class.
  - They can be accessed and modify freely.

2. private:
  - Members marked as `private` are accessible only within the class where they are defined.
  - They cannot be accessed or modified from outside the class.

3. protected:
  - Members marked as `protected` are accessible within the class and subclasses but not outside the class hierarchy.

```typescript
class Myclass {
    public publicVariable: number; // access anywhere
    private privateVariable: number; // access only within class
    protected protectedVariable: number; // access within a class and its subclass

    constructor(publicVariable: number, privateVariable: number, protectedVariable: number){
        this.publicVariable = publicVariable;
        this.privateVariable = privateVariable;
        this.protectedVariable = protectedVariable;
    }

    // method Accessing private member
    accessPrivateMember(): void {
        console.log(`Accssing private member variable : ${this.privateVariable}`);
    }

    // method accessing protected member
    accessProtectedMember(): void{
        console.log(`Accssing protected member variable : ${this.protectedVariable}`);
    }
}

class subclass extends Myclass{
    constructor(publicVariable: number, privateVariable: number, protectedVariable: number){
        super(publicVariable, privateVariable, protectedVariable);
    }

    // methods accessing protected member inherited from super class
    accessingProtectedMemberFromSubClass(): void{
        console.log(`Accessing protected variable from Myclass to subclass : ${this.protectedVariable}`)
    }
}

const instance = new Myclass(1, 2, 3);

console.log(`Public variable : ${instance.publicVariable}`);

// Attempting to access private member (not allowed outside the class)
// console.log(`Private variable: ${instance.privateVariable}`); // Error: Property 'privateVariable' is private

// Attempting to access protected member (not allowed outside the class or its subclasses)
// console.log(`Protected variable: ${instance.protectedVariable}`); // Error: Property 'protectedVariable' is protected

// Accessing method that accesses private member
instance.accessPrivateMember(); // Accssing private member variable : 2

// Accessing method that access protected member
instance.accessProtectedMember(); // Accessing protected member variable : 3

// Create an class instance of SubClass
const subInstance = new subclass(4, 5, 6);

// access protected member from subclass
subInstance.accessingProtectedMemberFromSubClass(); //Accessing protected variable from Myclass to subclass : 6
```

Output:
```
Public variable : 1
Accssing private member variable : 2
Accssing protected member variable : 3
Accessing protected variable from Myclass to subclass : 6
```

# Polymorphism :
- TS supports polymorphism, allowing objects of different classes to be treated as objects of a common superclass.
- This allow for code reuse and flexibility in designing class hierarchies.
- Ploymorphism is often achived through method overriding, where subclasses provide their own implimentation of methods defined in their superclass.

```typescript
class Animal {
  makeSound(): string {
    return 'Animal makes a sound';
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound(): string {
    return 'Meow!';
  }
}

// Creating instances of different animals
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// Calling the makeSound method on different objects
console.log(animal.makeSound()); // Outputs: Animal makes a sound
console.log(dog.makeSound());    // Outputs: Woof!
console.log(cat.makeSound());    // Outputs: Meow!
```


# Abstraction
- hiding the complex implementation details of a class and only showing necessary features and functionalities.
- focus on what an object dose reather than how it dose it, thus simplifying usage of complex systems.


In TS, you can achive abstraction through abstract classes and methods:

1. Abstract classes:
  - An abstract class is a class that cannot be instantiated directly.
  - It serves as a blueprint for other classes and may contain abstract methods and regular methods.

```typescript
abstract class Shape {
  abstract calculateArea(): number; // Abstract method (no implementation)

  display(): void {
    console.log("Displaying shape");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number { // Implementation of abstract method
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // Outputs: 78.53981633974483
circle.display(); // Outputs: Displaying shape

```

2. Abstract Method: 
  - Abstract methods are methods declared within an abstract class but without any implementation.
  - Subclasses must provide their own implementation of these methods.

```typescript
abstract class Printer {
  abstract printDocument(document: string): void;
}

class LaserPrinter extends Printer {
  printDocument(document: string): void {
    console.log(`Printing document using laser printer: ${document}`);
  }
}

const laserPrinter = new LaserPrinter();
laserPrinter.printDocument("Report"); // Outputs: Printing document using laser printer: Report

```

# Interface :

- an interface is like a contract or a blueprint that defines the structure of an object in TS.
- It specifies what properties an object have and their types.
- Interface are extensively used to enforce type-checking and provide documentation for code.

Syntax:
```typescript
interface interface_name {  
          // variables' declaration  
          // methods' declaration  
}  
```
- An interface is a keyword which is used to declare a TypeScript Interface.
- An interface_name is the name of the interface.
- An interface body contains variables and methods declarations.

**Purpose Of Interface :**

- Interfaces help ensure that objects in your code conform to a specific shape or structure.
- They promote code consistency and maintainability by enforcing a standard way of defining object properties.

Ex.
```typescript
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
```

**Use of Interface :**

We can use the interface for the following things:
  - Validating the specific structure of properties
  - Objects passed as parameters
  - Objects returned from functions.

**Extenting Interface Or Interface Inheritance :**

We can inherit the interface from the other interfaces. In other words, Typescript allows an interface to be inherited from zero or more base types.

The base type can be a class or interface. We can use the "extends" keyword to implement inheritance among interfaces.

Syntax
```typescript
child_interface extends parent interface{
  // expresions
}
```

Example:
```typescript
// Interface Inheritance
interface Person{
  name: string;
  age: number;
}
// Interface Inherit
interface Employees extends Person{
  gender: string;
  empCode: number;
}
let empObj = <Employees>{};
empObj.name = "Tejas";
empObj.age = 26;
empObj.gender = "Male";
empObj.empCode = 54121

console.log(`Name ${empObj.name}.`); // Name Tejas
console.log(`Employee code: ${empObj.empCode}.`) // Employee code 54121
```

**multiple interface inheritance :**

Syntax
```typescript
child_interface extends parent1, parent2 interface{
  // expresions
}
```

Example:
```typescript
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
```

**Opional properties :**

- TypeScript Opional properties type provides a way of defining the parts that are not necessarily required.
- In TypeScript, you can define optional properties in an interface, in a class, in an object, or in a type by using the ‘?’ modifier after the property name.
- Optional properties allow to specify that a property may or may not be present on an object of that type.
- Optional Properties can be useful when not all properties are required.

Syntax:
```typescript
propertyName? : type;
```

Example:
```typescript
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

console.log(employee1) // { name: 'John', age: 30 }
console.log(employee2) // { name: 'Jassica', designation: 'Sw Developer', age: 25 }
```

**Object destructuring :**

- Object destructuring is a feature in JavaScript and TypeScript that allows you to extract properties from objects and bind them to variables in a more concise way.
- It provides a convenient syntax to extract multiple values from objects and assign them to variables, making your code cleaner and easier to read.

```typescript
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
```

Object destructuring is especially useful when working with function parameters. It allows you to easily extract properties from function arguments and use them directly within the function body:

```typescript

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
```

// Array destructuring
```typescript
// Array with values
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, third] = numbers;

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(third); // Outputs: 3
```
