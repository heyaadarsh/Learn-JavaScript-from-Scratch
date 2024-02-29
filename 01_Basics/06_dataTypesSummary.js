// JS is dynamically type language because, we never state the data type in the code, we just use the keywords: 'let', 'var' & 'const'.

// There are two types of data types: 1. Primitive 2. Non Primitive

// Primitives are those, whose copies pass throught the program but not the actual reffernce. They are of total 7 in count:
/*
1. String 
2. Number
3. Boolean
4. null
5. undefined
6. symbol
7. BigiNT
*/

// Stack memory used for primitives and heap memory for non-primitive data types.



const num = 10; // Number
const number = 10.5; // Number
let name = "RAM"; // String
const result = true; // Boolean
let message = null; // null | typeof(message) will result object, coz null is an object type
let value; // O/P: Undefined

// Symbol makes variables uniques, even if they have the same value.
let x = 50;
let y = 50;
console.log(x==y); // true

let a = Symbol('50');
let b = Symbol('50')
console.log(a==b); // It will give false, coz of Symbol.

const bigVal = 626548941628416n // adding n in the last makes the variable bigInt
console.log(typeof bigVal); // O/P: bigint


// Non-Premitives: Whose actual reffernce is passed.
// Array, Objects & Functions

// Array:
const fruits = ["mango", "banana", "papaya"];

// Objects:
const obj = {
    name: "ram",
    roll: 22,
}

// function
const hello = function(){
    console.log("Hola!");
}