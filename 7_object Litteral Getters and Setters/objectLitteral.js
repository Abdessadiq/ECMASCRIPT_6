// --------------------|| Objects Litteral Getters & Setters ||---------------------------

// Objects litteral
let studentInfo = {
  firstName: "John",
  lastName: "Doe",

  // c'est pas possible de combiner ces 2 variable on utilisant
  // template litteral et this --> ça va afficher undefined .. voir
  fullName1: `${this.firstName}  ${this.lastName}`,

  // La solution est d'utiliser Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Pour modifier la valeur utiliser Setter

  set fullName(value) {
    // En utilisant array destructuring je vais mapper firstName et
    // LastName par les valeurs de value
    //console.log(value.split(" "));

    [this.firstName, this.lastName] = value.split(".");
  },
};
console.log(studentInfo.fullName1);

studentInfo.fullName = "ABDESSADIQ.BABA HAMOU";

console.log(studentInfo.fullName);
// console.log(studentInfo.fullName);

// console.log("Object Latterals Getter Ande Setters");
const carInfo = {
  marque: "Fiat",
  speed: 280,
  colors: ["blue", "white", "black", "red"],
  get getInfos() {
    return ` Les info de Car -colors : ${this.colors}  - marque : ${this.marque} -  speed : ${this.speed}`;
  },
  set setInfos(values) {
    [this.marque, this.speed, this.colors] = values;
  },
};

const values = {
  marque: "Peaugeou",
  speed: 300,
  colors: ["Green"],
};

