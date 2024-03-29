"use strict";
class Myclass {
    constructor(publicVariable, privateVariable, protectedVariable) {
        this.publicVariable = publicVariable;
        this.privateVariable = privateVariable;
        this.protectedVariable = protectedVariable;
    }
    // method Accessing private member
    accessPrivateMember() {
        console.log(`Accssing private member variable : ${this.privateVariable}`);
    }
    // method accessing protected member
    accessProtectedMember() {
        console.log(`Accssing protected member variable : ${this.protectedVariable}`);
    }
}
class subclass extends Myclass {
    constructor(publicVariable, privateVariable, protectedVariable) {
        super(publicVariable, privateVariable, protectedVariable);
    }
    // methods accessing protected member inherited from super class
    accessingProtectedMemberFromSubClass() {
        console.log(`Accessing protected variable from Myclass to subclass : ${this.protectedVariable}`);
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
