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

**Data Types**

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
```TypeScript
// enum
// declaring enums
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;
console.log(c);
```

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





**Start from :** **01:00:34** out of **16:33:64**