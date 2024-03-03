const marvel_heros = ["Ironman", "Loki", "Thor"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //[ 'Ironman', 'Loki', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ] 
// console.log(marvel_heros[3]); //[ 'Batman', 'Superman', 'Flash' ]

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); //[ 'Ironman', 'Loki', 'Thor', 'Batman', 'Superman', 'Flash' ]

// const allHeros = [...marvel_heros, ...dc_heros] // spread operator used for concating multiple arrays (like more than 2)
// console.log(allHeros); //[ 'Ironman', 'Loki', 'Thor', 'Batman', 'Superman', 'Flash' ]

// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 100]]];
// const flatArr = arr.flat(Infinity); //flat(depth): flat the subArray into a single array
// console.log(flatArr); /*[
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//   100
// ] */


// console.log(Array.isArray("AGYAT")); //false
// console.log(Array.from("AGYAT")); //[ 'A', 'G', 'Y', 'A', 'T' ]
// console.log(Array.from({name: "AGYAT"})); //[]: empty array (special case)


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]