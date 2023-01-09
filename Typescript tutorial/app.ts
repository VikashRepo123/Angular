export { } // modular approach // always use during ts programming in .ts file

// Variable in TS
// Types in typescript || type means datatype in other language
// 1) primitives types - boolean, number & string.
// 2) Special types - any, unknown, never, undefined & null
// TypeScript has special types that may not refer to any specific type of data.
// Lile js we can use var, let and const to make variable 
// Type Assignment are two types : Explict and implicit
// Explicit type assignment are easier to read and more intentional.
let firstName: string = "Dylan";
// Implicit - TypeScript will "guess" the type, based on the assigned value.
let lastName = "Dylan";

// TypeScript will throw an error if data types do not match.
let fname: string = "Dylan"; // type string
// fname = 33; // attempts to re-assign the value to a different type: THROW ERROR

// let lname: any = "vikash";
// lname = 23; 

// Array in TS
const names: string[] = [];
names.push('vikash');

var arr: readonly number[] = [1, 2, 3, 4];
// arr.push(4); // ERROR: 'push' does not exist on type 'readonly'
// console.log(arr); 

const numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("2"); // ERROR

// Objects in TS
const cars: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

// Type inference
const car = {
    type: "Toyota",
};
car.type = "Ford";
//   car.type = 2; // ERROR

// let carH: { type: string, mileage: number } = { // Error: Property 'mileage' is missing 
//     type: "Toyoto",
// };
// carH.mileage = 2000;


// Function in TS
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
// console.log(getTime());

function printHello(): void {
    console.log('Hello!');
}
printHello();

// Parameters
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(3, 2));

// Optional Parameters
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 1);
}
console.log(add(3, 4));

// Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(2, 3));
