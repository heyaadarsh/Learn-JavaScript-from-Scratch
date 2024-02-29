// Array: collection of multiple items in a single variable.

// Declaration
const arrOne = [10, 20, 30, 40, 50];
const stringArr = ["raj", "rahul", "ravi"];
const arrTwo = new Array(10, 20, 30, 100, 90, 70);

// console.log(arrOne); //[ 10, 20, 30, 40, 50 ]
// console.log(arrOne.toString()); //10,20,30,40,50
// console.log(arrTwo[0]); //10

// Array Methods
arrOne.push(60);
// console.log(arrOne); //[ 10, 20, 30, 40, 50, 60 ]

arrOne.pop() // removes the last element
// console.log(arrOne); //[ 10, 20, 30, 40, 50 ]

arrOne.unshift(0) // add any to val to starting of the array.
// console.log(arrOne); //[ 0, 10, 20, 30, 40, 50 ]

arrOne.shift(); //removes a val from the start
// console.log(arrOne); //[ 10, 20, 30, 40, 50 ]

// console.log(arrOne.includes(70)); //false
// console.log(arrOne.indexOf(30)); //2
// console.log(arrOne.indexOf(90)); //-1

const newArr = arrOne.join();

// console.log(arrOne); //[ 10, 20, 30, 40, 50 ]
// console.log(typeof arrOne); //object
// console.log(newArr); //10,20,30,40,50
// console.log(typeof newArr); //string

// Slice & Splice

let originalArr = [0, 1, 2, 3, 4, 5];
console.log("Point A: " + originalArr); //Point A: 0,1,2,3,4,5

let sliceArr = originalArr.slice(1, 3); //Last range is not included and it doesn't modify the actual array.
console.log(sliceArr); //[ 1, 2 ]
console.log("Point B: " + originalArr); //Point B: 0,1,2,3,4,5

let spliceArr = originalArr.splice(1, 3); //It takes out the elements by modifying the original array, aslo it includes the last range element.
console.log(spliceArr); //[ 1, 2, 3 ]
console.log("Point C: " + originalArr); //Point C: 0,4,5

