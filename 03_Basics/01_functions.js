// function definition
function sayMyName(){
    console.log("Agyat");
}

// sayMyName // function refference
// sayMyName(); // function calling/execution


// While defining functions, values passed are called parameters and while calling, values are called arguments.

function addTwo(number1, number2){ // number1 and number2 are parameters
    // console.log(number1 + number2);
}

// addTwo(7, 3); //10 : 7 and 3 are arguments

function addTwo(number1, number2){ 
    let result = number1 + number2;
    return result; // return a vallue from the function
}

const answer = addTwo(12, 8); //  Storing the returned value
// console.log("Answer is: ", answer); //Answer is:  20

function loggedIn(userName = "default"){
    return `${userName} just logged in!`;
}

// console.log(loggedIn("Agyat")); //Agyat just logged in!
// console.log(loggedIn()); // default just logged in! - If argument is not passed, default will be added.


function allCartPrice(...price){ // '...' is working as rest operator
    return price;
}

// console.log(allCartPrice(100, 542, 963, 9999)); // [ 100, 542, 963, 9999 ]

const course = {
    name: "Blogging in Hindi",
    price: "999rs"
}

function handleObject(anyObject){
    console.log(`The name of the course is ${anyObject.name} and the price of the course is ${anyObject.price}. Happy Buying!`);
}

// handleObject(course); // The name of the course is Blogging in Hindi and the price of the course is 999rs. Happy Buying!


const myArray = [100, 200, 300, 400];

function thirdValueOfArray(anyArray){
    return anyArray[2];
}

// console.log(thirdValueOfArray(myArray)); //300

