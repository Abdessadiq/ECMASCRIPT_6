// --------------------|| Objects Litteral Getters & Setters ||---------------------------

// Objects litteral
let studentInfo = {
  firstName: "John",
  lastName: "Doe",

  // c'est pas possible de combiner ces 2 variable on utilisant
  // template litteral et this --> ça va afficher undefined ..
  //fullName: `${this.firstName}  ${this.lastName}`,

  // La solution est d'utiliser Getter
  get fullName() {
    return `${this.firstName} & ${this.lastName}`;
  },

  // Pour modifier la valeur utiliser Setter

  set fullName(value) {
    // En utilisant array destructuring je vais mapper firstName et
    // LastName par les valeurs de value
    //console.log(value.split(" "));

    [this.firstName, this.lastName] = value.split(" ");
  },
};
studentInfo.fullName = "ABDESSADIQ BABAHAMOU";

console.log(studentInfo.fullName);
// console.log(studentInfo.fullName);

// console.log("Object Latterals Getter Ande Setters");
