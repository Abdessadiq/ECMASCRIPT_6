// --------|| Primitive types (passed by value) vs Objects (passed by reference)  ||---------------------------
// _-_ primitive types (Boolean,undefined, null, String )
// Passed by value

const varBool = false;
console.log(varBool);

const varUndefined = undefined;
// Or ==> const varUndifined; // si on déclare une variable sans le donné une valeur -> prend la valeur undefined
console.log(varUndefined);

const varNull = null;
console.log(varNull);

// Pour primitive type même la variable fullName & copyFullName sont deconneter c'est à dire si je change
// la valeur de la variable copyFullName, fullName ne serra pas changer ou affecter
// Par ce que Primitve type ---> Passed By Value != Object (Passed by reference)
// For String Type
let fullName = "ABDESSADIQ BABA HAMOU";
let copyFullName = fullName;
copyFullName = "John Doe";

console.log(fullName);
console.log(copyFullName);

// _-_ Objects (array-liretal "[]", object-literal "{}", set, map )
// Passed by reference

// array c'est un objet on js
console.log(typeof []);
console.log(typeof {});
let numbers = [12, 13, 72, 13];
let copyOfNumbers = numbers;
copyOfNumbers[0] = 222;

console.log(numbers);
console.log(copyOfNumbers);

let studentInfo = {
  fullName: "John Doe",
  age: 23,
};
let copyStudentInfo = studentInfo;
copyStudentInfo.fullName = "ABDESSADIQ BABA HAMOU";

console.log(studentInfo);
console.log(copyStudentInfo);
