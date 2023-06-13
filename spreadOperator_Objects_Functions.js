// --------------------||Spread Operator (Objects.. Functions)  ||---------------------------
// Voir comment extraire les propriéties et les valeur dans un object
// Voir comment travailler avec array comme un argument pour une fonction en utilisant
// spread Operator

// =1= Objects

const studentInfo = {
  fullName: "ABDESSADIQ BABA HAMOU",
  age: 24,
};
// Faut Ajouter les 3 ... pour ne pas avoir le problème de l'objet inside object
const studentInfoCopy = { ...studentInfo };
console.log(studentInfoCopy);

// La maintenant si je modifier la valeur de studentInfoCopy la valeur de studentInfo
// Ne va pas affecter Donc on a résoulu le problème de passed by reference avec
// Spread operator ..
studentInfoCopy.fullName = "John Doe";
studentInfoCopy.age = 89;
console.log(studentInfo);
console.log(studentInfoCopy);

// =2= Functions

const addNumbers = (a, b, c) => {
  return a + b + c;
};

// Ce code ce n'est pas bien structurer
const a = 12;
const b = 33;
const c = 55;
const result = addNumbers(a, b, c);
console.log(result);

// déclarer un array pour mettre les valeur dedans puis utiliser spread operator
// c'est plus pratique ===>
const numbers = [12, 33, 55];
const _result = addNumbers(...numbers);
console.log(_result);
