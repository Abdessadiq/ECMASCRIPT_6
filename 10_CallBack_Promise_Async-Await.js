// ------------------------[|Callback, Promise and async/await|]----------------------------

// Intro : Dans ce cours : voir la différence entre async/await Comment rendre notre code Asynchronous

// async/await considérer comme une abstraction de Promise.. (syntactic sugar of Promise) : Il ont essayé
// de simplifier comment créer La promise avec async/await..

// Créer une List de Students dans un table..

const students = [
  {
    fullName: "John Doe",
    age: 26,
  },
  { fullName: "Maria Cartner", age: 26 },
];

// Pour faire appel à la méthode de l'ajout avant getStudent.. On a utilisé callback pour que la méthode
// de l'affichage sout appeler après l'ajout de student mais cette méthode (Le fait de l'ajout en utilisant callback)
// Ce n'est pas la bonne méthode pour le rendre notre code Asynchronous.. par ce qu'il se peut que il y on a
// des callback qui fait appel à d'autre collback (callback insted callback..)

function addStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    callback();
  }, 1000);
}
//Pour Récupérer un student
function getStudent() {
  setTimeout(() => {
    console.log(students);
  }, 500);
}

// Faire Appel à la fonction Pour ajouter un student..
addStudent({ fullName: "Joe Smith", age: 26 }, getStudent);

//  Appler la méthode pour Afficher Les students ..

// En utilisant maintenant Promise aussi  C'est pas la bonne méthodes car il se peut qu'il ait plusieurs then..

function addStudentProm(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(student);
      resolve();
    }, 1000);
  });
}
function getStudentProm() {
  setTimeout(() => {
    console.log(students);
  }, 500);
}

addStudentProm({ fullName: "Itachi Ochioua", age: 13 }).then(() => {
  getStudentProm();
});

//----------

function addStudentPromAsynAwait(student) {
  students.push(student);
}
function getStudentAsyncAwait() {
  setTimeout(() => {
    console.log(students);
  }, 500);
}

// Donc la bonne méthode pour rendre notre code async c'est d'utilisé Async/await
// Plus lisible plus simple et plus pratique..

// Async Pour dire que ici dans cette méthode je vais que ma fonction soit Asynchronous..
async function main() {
  // ici wait pour que dire que je veux que cette méthode soit appeler le premier avant la méthode de
  // l'afichage de le students..
  await addStudentPromAsynAwait({ fullName: "Naruto Ozomaki", age: 12.5 });
  getStudentAsyncAwait();
}
main();
