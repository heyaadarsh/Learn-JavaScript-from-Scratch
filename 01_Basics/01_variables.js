const accountId = 78945; // cannot be changed
var accountPassword = "489784"; // prefer not to use 'var' because of its block scope and functional scope.
let accountEmail = "ad@yahoo.com"; // 'let' is the new alternative of 'var' for defining variables.
accountCity = "Mumbai"; // JavaScript is smart enough to identify the variables even if you don't use the keywords like 'let', 'var', or 'const' but it's not a good practice.

console.log(accountId); // by using this you can print the output (O/P) on the terminal or console. In this case it will print the value of accoutId i.e. 78945.

// Changing the values:
accountPassword = "12345";
accountEmail = "ad@gmail.com";
accountCity = "Patna";

// We can't update the value of 'accountId', coz it is defined by 'const' keyword.

console.table([accountId, accountPassword, accountEmail, accountCity]); // using this function you can print multiples values in tabular form.
