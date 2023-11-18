"use strict"; // It will treat the JS Code on the parameter of newer version of JavaScript.

// DATA TYPES:

// INTEGER
// Range: -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER)
let num = 1234
console.log(num);

// BIGINT: Used for numbers out of the range of INT

// STRING: You can use " " or ' ' to give the values. ** Prefer " " **
let personName = "Ved";
let address = "Not Found";
console.table([personName, address]);

// BOOLEAN: Used for true/false value
let matchWon = true;
let rainingNow = false;
console.table([matchWon, rainingNow]);

// null: Stand alone value
/*
for example:
You created a weather app and currently you are working on the development, so you want if any user tries to know the the temperature right now, app would show nothing.
let temp = 0; '0' is also a temperature so you can't do that.
let temp; It will show 'undefined' which is not good.
So in this case you can use 'null'
let temp = null; It will show null to the user.
*/
let temp = null;
console.log(temp);

// UNDEFINED: Not initiallizing with any value results 'undefined'
let nothing;
console.log(nothing);

// SYMBOL: used for uniquness, will learn later

// OBJECT: will learn later

//typeOf(): Using this function you can find out the data type of the variable or direct from the value.
console.log(typeof("hello"));
console.log(typeof(1256));
console.log(typeof(temp)); // When reult in 'null', data type will be onject.
console.log(typeof(nothing));
console.log(typeof(matchWon));