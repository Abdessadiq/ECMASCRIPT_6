// --------------------||Spread Operator (Array)  ||---------------------------
// C'est le fait de combiner des données des itérateur comme array..

const numbers = [18, 13, 82];
const names = ["ABDESSADIQ BABA HAMOU", "ELMALKI MOHAMED"];
const number = 132;

//La 1er Solution sans spread Operator
const combineValuesOne = [numbers, names, number];
console.log(combineValuesOne);
// il affiche un array à l'intérieur d'un autre array

//La 2em Solution sans spread Operator  == Utilisation de la méthode concat ==>

const combineValuesTwo = [].concat(numbers, names, number);
// Or const combineValuesTwo = numbers.concat( names, number);

console.log(combineValuesTwo);
// mais la solution 1 & 2 le code c'est pas bien structurer ..

// Donc je vais utiliser Spread Operator c'est  les 3 points '...' --->
const combineValuesTree = [...numbers, ...names, number];
console.log(combineValuesTree);
