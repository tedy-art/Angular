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

