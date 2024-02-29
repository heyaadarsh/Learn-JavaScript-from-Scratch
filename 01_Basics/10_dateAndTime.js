let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


let setDate = new Date(2023, 0, 23, 5, 3);
console.log(setDate.toDateString()); //Mon Jan 23 2023
console.log(setDate.toLocaleString()); //23/1/2023, 5:03:00 am

let setNewDate = new Date("2025-01-26");
console.log(setNewDate.toLocaleString()); //26/1/2025, 5:30:00 am

console.log(Date.now()); // milliseconds from 1 Jan 1970 till now

console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay()); // and many more...


console.log(myDate.toLocaleString('default', {
    weekday: "long"
}));