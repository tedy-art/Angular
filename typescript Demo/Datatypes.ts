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

// Boolean
// in TS we can't declare only boolean varable without it's Type. it will give an error.
// let isValid : boolean; // error
let isValid : boolean = false;

console.log(isValid);


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


// enum
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


// Tuple
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