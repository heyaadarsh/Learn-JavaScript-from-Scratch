let name = "Dhruv";
let rollNum = 168;

console.log(name + rollNum + " Student"); // Outdated method

console.log(`${name} ${rollNum} Student`); // New and better way to write variables and strings together, it is called 'String Interpolation'.

// Another way to define a string:
let bookName = new String('Shakti');
console.log(bookName);
console.log(bookName.toString());

//accessing character of any specific position.
console.log(bookName[1]); //h


console.log(bookName.length); //6

console.log(bookName.toUpperCase()); //SHAKTI
console.log(bookName.toLowerCase()); //shakti

console.log(bookName.charAt(3)); //k

console.log(bookName.indexOf('k')); //3

let heroName = "Spider Name";
let newString = heroName.substring(0, 6);
console.log(newString); // Spider

let slicedStr = heroName.slice(-4, 11);
console.log(slicedStr); // Name

// trim() removes spaces before and after the string
let spaceName = "     Agyat       ";
console.log(spaceName.trim()); // Agyat

let url = "https://www.digibag.in/contact%20us/";
console.log(url.replace("%20", "-")); // https://www.digibag.in/contact-us/


console.log(url.includes('digibag')); //true

let stringOne = "Hi! My name is nothing.";
console.log(stringOne.split(' ')); // [ 'Hi!', 'My', 'name', 'is', 'nothing.' ] - covereted in to an array on the basis of spaces(' ').

