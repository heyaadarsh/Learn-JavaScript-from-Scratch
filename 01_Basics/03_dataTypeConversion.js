let number = "33"; // 33 is in double quotes, that's why it is not a number, it's a string.
console.log(typeof(number));
console.log(number);

let valueInInteger = Number(number); // It will convert the value in Integer.
console.log(typeof(valueInInteger));
console.log(valueInInteger);

let stringValue = "123XYZ";
let numValue = Number(stringValue);
console.log(typeof(numValue));
console.log(numValue); // It will show NaN means Not A Number.

let nullValue = null;
let intValue = Number(nullValue);
console.log(typeof(intValue));
console.log(intValue); // It will show 0 (zero).

let notDefined = undefined;
let newValue = Number(notDefined);
console.log(typeof(newValue));
console.log(newValue); // It will show NaN means Not A Number.

let bool = true;
let boolInt = Number(bool);
console.log(typeof(boolInt));
console.log(boolInt); // It will show 1 in case of true.

let boolValue = false;
let boolNum = Number(boolValue);
console.log(typeof(boolNum));
console.log(boolNum); // It will show 0 in case of false.


// Some data type to BOOLEAN conversion

let num = 1;
let booleanVal = Boolean(num);
console.log(booleanVal); // It will give O/P as true.
// Same in case of 0 (zero), O/P will be false.
// Any value other than 0 (zero) will be true.

let empty = "";
let boolVal = Boolean(empty);
console.log(boolVal); // O/P -> false
// Empty string will give O/P false other wise true.


// Number to string
let n = 33;
let str = String(n);
console.log(str); // 33, but type will be string means "33".
console.log(typeof str);

