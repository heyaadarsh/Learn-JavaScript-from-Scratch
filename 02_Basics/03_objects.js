// There are two types of declaring a object:
// 1. literal
// 2. constructor (singleton)

// constructor method: object.create


// object literals:

const mySym = Symbol("key1");
const user = {
    name: "Agyat",
    "fullName": "Agyat AD", // can't be accesed using user.fullName, only be accessed using user["fullName"]
    [mySym]: "myKey1",
    age: 20,
    location: "Chandigarh",
    email: "agyat@ad.com",
    isLoggedIn: false,
    lastLoginDays: ["Sun", "Wed"]
}

// console.log(user.location); //Chandigarh
// console.log(user["location"]); //Chandigarh
// console.log(user[mySym]); //myKey1

// user.location = "Rajpura"; //Changing value
// Object.freeze(user); //Freezing object
// user.email = "ad@agyat.com"; //After freezing it will not work
// console.log(user);
/* {
    name: 'Agyat',
    fullName: 'Agyat AD',
    age: 20,
    location: 'Rajpura',
    email: 'agyat@ad.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Sun', 'Wed' ],
    [Symbol(key1)]: 'myKey1'
  } */

user.greeting = function(){
    console.log("Hello! How are you?");
}

console.log(user.greeting); // [Function (anonymous)]
console.log(user.greeting()); //Hello! How are you? undefined

user.greetingTwo = function(){
    console.log(`Hello ${this.fullName}, How are you?`);
}
console.log(user.greetingTwo()); //Hello Agyat AD, How are you? undefined