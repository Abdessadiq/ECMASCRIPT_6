/** L'objectif est d'appeler les méthodes de algeebra et arithmetic
 * ICI dans calculator donc notre application soit moduler
 */

// console.log("calculator");
// console.log(add(12, 334));
// console.log(log(12));

//Pour utiliser les méthode de algebra et arichmitic il faut les importer
// J'ai utilisé ./ parce que le fichier arithmetic est dans meme niveau
// Pour pouvoir utiliser les méthodes il faut les exporter
import { square } from "./algebra.js";
import { add } from "./arithmetic.js";

console.log("moduler");

console.log(add(199, 12));
console.log(square(9));

// Dans le site officielle de caniuse il nous donne les fonctionnalité qui sont supporter
// Par les browser..Et pour notre cas module n'est pas supporter
// par quelques navigateur et des enciens version commen le naviga IE

// donc pour utiliser ces fonctionnalité il faut utiliser un fallback
// qui a des version qui supporte les enciennes version mais
// pour faire cela il faut que le fichier .js soit transpiller (Exemple calculator
// Il faut quel soit transpiler pour qu'il soit le fichier fallback ) comme créer une version
// qui est encienne en se basant sur la nouvelle version
// pour faire ça il faut utiliser le fichier dans le fichier .html voir index.html..

// il n'accepte pas parce que  il faut utilisé le keyword de la déclaration
// Des variables
// le mood strict est automatiquement utilisé dans les moduler..
number = 233;
console.log(number);
