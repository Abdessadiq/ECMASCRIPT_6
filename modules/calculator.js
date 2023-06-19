/** L'objectif est d'appeler les méthodes de algeebra et arithmetic
 * ICI dans calculator donc notre application soit moduler
 */

// console.log("calculator");
// console.log(add(12, 334));
// console.log(log(12));

//Pour utiliser les méthode de algebra et arichmitic il faut les importer
// J'ai utilisé ./ parce que le fichier arithmetic est dans meme niveau
// Pour pouvoir utiliser les méthodes il faut les exporter
import { add } from "./arithmetic.js";

console.log(add(199, 12));
