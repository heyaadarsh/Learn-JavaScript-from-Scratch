// All primitive data types are stored in stack and non-primitives are in heap.

// stack sends a copy a variable where heap gives the refference of the actual variable.

// Stack ex:
let myName = "Aakash";
let yourName = myName;
yourName = "Rishav";

console.log(yourName); // O/P: Rishav
console.log(myName); // O/P: Aakash - It will not be changed because stack passes the copy but not the not the actual refference.


// Heap ex:
let userOne = {
    email: "x@gmail.com",
    upi: "x@ibl"
}
let userTwo = userOne;
userTwo.email = "y@yahoo.com";

console.log(userTwo.email); // O/P: y@yahoo.com
console.log(userOne.email); // O/P: y@yahoo.com - It will be also changed because of the actual refference of the object.