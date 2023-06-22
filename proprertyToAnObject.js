//---- || Define A property to an Object and Change it configuration by Using Object.defineProperty ||---------
// console.log("Property To an Objects ..");
let studentInfo = {
  firstName: "ABDESSADIQ",
  lastName: "BABA HAMOU",
  //   get fullName() {
  //     return `${this.firstName} & ${this.lastName}`;
  //   },
  //   set fullName(value) {
  //     [this.firstName, this.lastName] = value.split(" ");
  //   },
};

// value
// writable
// enumerable
// configurable
//

// Property - Data
Object.defineProperty(studentInfo, "college", {
  value: "Harvard",
  // si la writable vaut false --> permet de bloquer l'update de la valeur
  writable: true,
  // Si la enumerable vaut false parmer d'accéder au key dans l'objet vois la boocle for ..
  enumerable: true,
  // Si configurable vaut true ça a permet d'accèder au configuration comme delette
  configurable: true,
});

delete studentInfo.college;
console.log(studentInfo);

// The loop for..
studentInfo.college = "oxford";
console.log(studentInfo.college);
for (let key in studentInfo) {
  console.log(key);
}
// studentInfo.fullName = "John Doe";
// console.log(studentInfo.fullName);

// Property -Accessor
Object.defineProperty(studentInfo, "fullName", {
  get() {
    return `${this.firstName} & ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  // Je peux ajouter les autre element tel que enumerable configurable sauf value
  // C'est pas possible ..
  //   value: "it is impossible ",
  enumerable: true,
});

studentInfo.fullName = "John Smeth";
console.log(studentInfo.fullName);
