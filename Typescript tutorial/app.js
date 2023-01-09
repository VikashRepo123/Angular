"use strict";
exports.__esModule = true;
// Variable in TS
// Types in typescript || type means datatype in other language
// 1) primitives types - boolean, number & string.
// 2) Special types - any, unknown, never, undefined & null
// TypeScript has special types that may not refer to any specific type of data.
// Type Assignment are two types : Explict and implicit
// Explicit type assignment are easier to read and more intentional.
var firstName = "Dylan";
// Implicit - TypeScript will "guess" the type, based on the assigned value.
var lastName = "Dylan";
// TypeScript will throw an error if data types do not match.
var fname = "Dylan"; // type string
// fname = 33; // attempts to re-assign the value to a different type: THROW ERROR
// let lname: any = "vikash";
// lname = 23; 
// Array in TS
var names = [];
names.push('vikash');
var arr = [1, 2, 3, 4];
// arr.push(4); // ERROR: 'push' does not exist on type 'readonly'
// console.log(arr); 
var numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("2"); // ERROR
// Objects in TS
var cars = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Type inference
var car = {
    type: "Toyota"
};
car.type = "Ford";
//   car.type = 2; // ERROR
// let carH: { type: string, mileage: number } = { // Error: Property 'mileage' is missing 
//     type: "Toyoto",
// };
// carH.mileage = 2000;
// Function in TS
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
// console.log(getTime());
function printHello() {
    console.log('Hello!');
}
printHello();
// Parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 2));
// Optional Parameters
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 1);
}
console.log(add(3, 4));
// Default Parameters
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2, 3));
