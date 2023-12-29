// Output will be in true or false.
console.log(10>20);
console.log(10<20);
console.log(10>=10);
console.log(10<=20);
console.log(50==50);
console.log(10!=20);


// In the below examples JS converted strings into intger itself.
console.log("10" > 5); // coverted "10" to 10
console.log("010" > 5); // coverted "010" to 10


// comparison operators(> and <) converts null to zero.
console.log(null==0); // It will not convert null to zero, i.e. false
console.log(null>0); // null to zero
console.log(null>=0); // null to zero

// undefined comapred to zero, results false always.
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === Tripple equals sign strictly checks the data means it will also check for the data type.
console.log("20" === 20); // Here JS will not convert "20" to 20.
console.log("050" === 50); // Same here