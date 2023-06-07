//si je déclare une variable dans le global je peux y accéder dans n'impote quel block dans le fichier .js
// myName c'est variable global
var myName = "ABDESSADIQ BABA HAMOU";
console.log(myName);

// maintenant si je crée une variable dans cette fonction je peux pas y accéder
// à l'exterieur de bolck de cette fonction
// donc on parle de FUNCTION-SCOPED
// myNumber c'est local variable
function getNumber() {
  var myNumber = 399;
  return myNumber;
}
// consoleg(myNumbers); // ça passe pas ----> error --> is not defined;
console.log(getNumber());

if (true) {
  var number = 12;
}
console.log(number); // ça passe number is

// ---------- var c'est un keyword qu'on utilise dans ECMAScript 5 ---------------
//   var keyword  c'est Function-Scoped  ==> c'est à dire que si j'utilise var dans
//   la fonction je peux pas l'utilisé en dehors de la block de cette fonction
//   mais par contre si je la déclare dans un autre block que la fontion
//   comme le block de if ou for loop .. je peur l'utiliser
//----------------------------------------------------------------

// ---------- let c'est un keyword qu'on utilise depuis ECMAScript 6 ---------------
//   let keyword  c'est Block-Scoped  ==> c'est à dire que si j'utilise let keyword
// dans la déclaration de variable dans n'importe block statement je peux pas y accéder
// dehors de ce block contre le keywords var...

//----------------------------------------------------------------

// ---------------------------------- Hoisting -------------------------
// Hoisting c'est à dire que le compilateur de js prend toutes les variables
// déclarer dans le programme et il les enregister toute au début de programme
// dans notre cas il m'affiche  undefined  dans la déclaration de ma variable
// anythings c'est à dire que la varaible est existe
// mais il est indifiner c'est comme si je déclarer  la variable mais je ne lui
// afficte aucune valeur ------< et c'est ça le Hoisting
//----------------------------- -----------------------------------

// console.log(anythings);
var enythings = " this is any thing juste for testing"; // affichier undefined

// *********************************** VAR vs LET ************************************
// ---------------------------------  LET --------------------------
// on ne peut pas déclarer une variable 2 fois avec ---- LET ----
// dans le même block : exemple  ----->
// let y = 20;
// let y = 20;  // le débugeur générere une erreur comme quoi cette variable
// est déjà déclarer
// mais par contre si je le déclare dans un autre block ça passe
// exemple	 : >>>>>>>>>>>
let x = 199;
if (true) {
  let x = 100;
  console.log("la valeur à l'interieur de block  if : " + x);
}
console.log("La valeur de x à l'exterieur du block if : " + x);

// --------------------------------- Full exemple for all --------------------------
let y = 12220;
let b = 19;
b = 100;
console.log(" la valeur de b dans le global : " + b);
if (true) {
  let b = 20;
  b = 299;
  console.log("la valeur de b dans le block statement if : " + b);
  // la variable b Ici considérer commen Block-Scoped
}

function getB() {
  let b = 200;
  b = 2999;
  console.log(" la valeur de b dans la fonction getB : " + b);

  // la variable b Ici considérer commen Function-Scoped
}
for (let i = 0; i < 4; i++) {
  let b = i + 1;

  console.log(" la valeur de b dans LOOP for : " + b);
}
console.log(b);
// Résumé :  l'objectif de cette exmple c'est juste pour manterer que
// la varaible b qu'on  a déclarer dans toute les block au dessous sont
// déconnecter les uns avec les autres m
// EST c'est déconceiller de déclarrer une variable avec  le même nom..
// DONC le risque de keyword var c'est que on déclare une variable global
// c'est pour cas viens let pour corréger ce problème
//-------------------------------------------------------------------------

//--------------------------- CONST -------------------------------------

// la même chose que LET c-a-d que toutes les régle de LET
//s'applique aussi sur CONST la seule diffrence c'est que on ne peut pas
// changer la valeur DANS LE SCOPE : exemple : -------->

const API_KEY = 8080;
// const API_KEY = 212; // ça passe pas ....

if (true) {
  const API_KEY = 112; // ça passe ..
  console.log("la valeur de API_KEY dans le block if : " + API_KEY);
}
console.log(API_KEY);

// RULLES
// avoid using the keyword "var" in general
// always use "const"  for constante
// and use 'let' for everything else

//------------------------------ Arrow Funtions -------------------------------------------
//Arrow function ou Fat Arrow Funtion ( => ) c'est une méthode de créer les fonction et qui vient
// avec l'arrivé de ES6  et il travail avec les new browser et si on veut que notre
// fonction marche meme dans les anciens browser il faut faire ce qu'on
//appelle "Transpile the code"

//------------------------- Arrow Functions - Pros = Avantage ------------------------
// * Map the Keyword "this" without the using  bind
// * Make code concise =  structurer
// * shorter presentation

//------------------------- Arrow Functions - Cons = Inconvénientss------------------------
// * Confusing Rules & Syndax
// * Make code difecult to Read

//------------------The First Exemple--------------------------------------------------
// exemple for old version of ecmascript < 6
// On utilise const dans la déclaration de la fonction pour éviter le changement
// de la valeur de cette fonction  ...
const sayHello = function (firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
};

// function(){ //traitement } <----- this is the anonymous function
// Exemple Use Arrow Funtion ES >=6 the new version of SC  (Two Arguments)

const sayHello1 = (firstName, lastName) =>
  "Hello " + firstName + " " + lastName;

console.log(
  sayHello("With the old version of ES < 6" + "ABDESSADIQ", "BABA HAMOU")
);
console.log(
  sayHello1("With the last version of ES > 6" + "ABDESSADIQ", "BABA HAMOU")
);
// RULES  --> Enlever keyword function  et Les "curly braces {}" s'il en a un seul param
// on peut aussi enlever return si on a une seul ligne dans la fonction Et Ajouter
// Fat Arrow '=>' après les parentaise

//------------------------------the Second Exemple  ----------------------------------

// the Old version of ES
// Exemple (One argument)
const getFullName = function (fullName) {
  return "Hello " + fullName;
};
console.log(getFullName("ABDESSADIQ BABA HAMOU"));
// the new version of ES >=6 syntax with Arrow Funtion
const getFullName1 = (fullName) => "HEY " + fullName;

console.log(getFullName1("ABDESSADIQ BABA HAMOU"));

//------------------------------the Third Exemple  ----------------------------------

// the Old version of ES
const sayHey = function () {
  return "Hey !";
};
console.log(sayHey());
// the new version of ES 6>=6. used Arrow functions

const sayHey1 = () => "Hey !";
console.log(sayHey1());

// ----------------for return Object --------------------------------
const getObject = () => ({
  age: 12,
  firstName: "ABDESSADIQ",
  lastName: "BABA HAMOU",
  city: "London",
});
console.log(getObject()); //

// Problem with this ----------------------------------------------------------------
// exemple for the old ES
const incrementNumber = {
  num: 100,
  increment: function () {
    setTimeout(
      function () {
        console.log((this.num += 1));
      }.bind(this),
      1000
    );
  },
};
incrementNumber.increment();

// exemple for the new version ES6>
const incrementNumber1 = {
  num: 100,
  increment() {
    setTimeout(() => {
      console.log((this.num += 1));
    }, 1000);
  },
};
incrementNumber.increment();

// dans l'ecxemple de ES6 on a pas besoin d'utiliser la fonction bind..

// -------------------- | Template Literales | ------------------------------------------

// Template Literales c'est une methode qui vient avec SC6 pour simplifier et faciliter
// Comment on peut formater & compbiner les expression comme String variables, functions...

// Exemple (1) String Concatination
// ` .. ${Expression JS}`
console.log("********************* | Template Laterales... | ****************");
const firstName = "John";
const lastName = "Dae";
const theFullName = `${firstName} ${lastName}`;

console.log(theFullName);
// Exemple (2)
const price = 120;
const tax = 20;
const taxFormula = (price * tax) / 100;
const theTotal = `The total to pay is ${taxFormula}`;
const total = () => {
  return `The Total to pay is : ${taxFormula} `;
};
console.log(total());
console.log(theTotal);

// Exemple 3 Formating text
const message = "This has to be on \n two line";
console.log(message);
// With Template Literales --->
const messageTemplate = `This is to be on 
Two lines`;
console.log(messageTemplate);
// Exemple 4
const USER_INFOS = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};

// 1 - Formatting Code without using sequences
// 2 - accessing to the content of  an Object
const createMarckup = (studentInfo) => {
  return `
    <ul> 
      <li>${studentInfo.firstName} </li> 
      <li>${studentInfo.lastName} </li> 
      <li>${studentInfo.age} </li> 
    </ul>
          `;
};
console.log(createMarckup(USER_INFOS));

console.log("*****************************************************");

// ---------------------------| Destructuring Object |-------------------------------

const car = {
  name: "fiat",
  model: 2021,
  weight: 850,
  colors: {
    red: true,
    green: false,
  },
};

// La création d'un desctucuring Object se fait comme : keyword (let, const ..) {} = NameObject
const {
  name,
  colors: { red: redColor, green: greenClolor, blue = false },
} = car;

console.log(name);
console.log(redColor);
// console.log(red);
// console.log(green); // Affiche gree is not defined car on a changer le nom de green

// ************************ | Destructuring Array | ***********************************
const studentInfo = [1289, "Maria Carter", "washegton"];
// Destructuring Array c'est de faire mapper les donnés de l'array mais a condition
// de respecter l'order avec l'index de l'array parce que il suit avec ordere

// Pour  la destructuring array de notre cas 'studentInfo' C'est = >
// exemple (1)
const [id, hisName, city] = studentInfo;

// ce code par exemple ce n'est pas bien structurer et il est répititif != don't repeat yourself =>
const idStudent = studentInfo[0];
const nameStudent = studentInfo[1];
const cityStudent = studentInfo[2];

console.log(id, hisName, city);
// Et si par exemple je change l'ordre les info vont aussi changer selon l'ordre
// de l'index de table exemple
const [theHisName, ident, hiscity] = studentInfo;

console.log(theHisName);
// Exemple -- > Comment je peux modifier la valeur de _id avec la valeur que j'ai dans
// l'array 1234 Et en utilisant Array distructuring
let _id = 19;
const objectStudent = [1234, "Maria Carter..", "Washington"];
// j'ai pas utiliser le mot clé de la création de variable par ce que la vaiable est
// déjà créer ..Donc c'est la même chose si je vais accéder à une autres variables
let _name;
[_id, _name] = objectStudent;

console.log(_id);

console.log(_name);

// Exemple Comment je peux travailler avec Array disctructuring Et que j'accéde qu'une
// seule varaible comme : Washington comme : city => city = Washington
// let _city;

const [, , _city] = objectStudent;
console.log(_city);
// Exemple 4
//SWAPPING variable values rendre m = 45 et n = 12**
// On peut faire ça avec Array destructuring
let m = 12;
let n = 45;

[m, n] = [n, m];

console.log(m);
console.log(n);
// exemple 5 : array  into the array

if (true) {
  const arrayInfo = [
    1278,
    "Maria Carter",
    "Washington",
    ["Flashtoni", "@Corpoint", "Ali_Bird"],
  ];
  const [id, name, city, [facebook, insta, twitter]] = arrayInfo;
  console.log(id);
  console.log(name);
  console.log(city);
  console.log(facebook);
  console.log(insta);
  console.log(twitter);
}

// ************************ | Destructuring Function | ***********************************
// In this course we will see how to do the destructuring in the return value of functions
// on va voir 2 exemple
// dans le premier exemple  on va prendre la valeur returner de la fonction et on va la faire object destruct
// dans la 2em exemple on va faire setting a un argument  de la fonction et voir c'est quoi les bénifique de ça ..

// Cette Format c'est juste une format simplifier pour retourner un object dans (**) y a format détailler
const getStudentInfo = () => ({
  name_1: "John Deo",
  age_1: 18,
});

// getStudentInfo() => Return Un object {name:"John Deo", age:18};
console.log(getStudentInfo());
// Comment je peut faire en utilisant Object Desctructuring pour que les varaibles name et age ont
// les valeurs John Deo et 18.
const { name_1, age_1 } = getStudentInfo(); //
console.log(name_1);
console.log(age_1);

// (**) Format Plus détailler ..
const getStudentInfo2 = () => {
  return {
    name: "John Deo 2",
    age: 82,
  };
};
console.log(getStudentInfo2());

const getFullNameF = (firstName = "John", lastName = "Doe") => {
  return `${firstName}  ${lastName}`;
};
console.log(getFullNameF("Mariano", "John"));
// Provoquer un problème pour qu'on puisse le résoudre <== Au lieu d'utliser les parameters de la fonction
// Je les utiliser comme un object comme ..
const getFullNameObj = ({
  firstNameOb = "John Obj",
  lastNameOb = "Doe Obj",
}) => {
  return `${firstNameOb}  ${lastNameOb}`;
};
const person = (getFullNameObject = {
  firstNameOb: "Maria ..",
  lastNameOb: "Cartner ..",
});
console.log(person);
// C'est comme je fais
const { firstNameOb = "Johan", lastNameOb = "Cartner" } = {
  lastNameOb: "Doe",
  firstNameOb: "Cart",
};
console.log(firstNameOb);
console.log(lastNameOb);
// c'est à dire même si je change l'ordre de lastNameOb et firstNameOb les valeur qui leurs sont affecter
// vont pas changer de l'ordre..
// ----------------------|| For Loop and forEach, for..in for..of ||---------------------------

// Exemple 1 L'utlisation de for loop
let numbersArray = [1233, 123, 198, 9084];
// 1 - L'initialisation
// 2 - La Condition
// 3 - L'incrementation..
for (let i = 0; i < numbersArray.length; i++) {
  console.log(i);
  console.log(numbersArray[i]);
}

// Avec l'utilisation de forEach --> Ca s'appelle callback..
numbersArray.forEach((element) => {
  console.log(element);
});

// Pour for..in Ca permet d'etirer les index d'une table.. Et pas les element ..>
for (const index in numbersArray) {
  console.log(index);
  // Pour accéder au élément de la table .. >
  // J'utilise le keyword const parce que le traitement de for.in et for.of va se faire par sckop
  // c'est à dire que a chaque va passer d'un element à un autre dans la table va créer un sckop
  // et du coup va créer un nouveau variable c'est pour ça ne pose pas de problème ..
  console.log(numbersArray[index]);
}
// Pour for..of permet d'étirer les element de la table ..
for (const element of numbersArray) {
  console.log(element);
}
