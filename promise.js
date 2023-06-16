// --------------------|| Promise ||---------------------------
/**
 * C'est quoi: supposant qu'un prof dit à son étudiant qu'il va envoyé un lesson
 * c'est à dire le prof à promis son étudient qu'il va envoyé un lesson :
 * Donc Y a 2 possiblité :

 * 1 - Soit l'étudiant reçoit le cours Et c'est Bon
 * 2 - Soit ne reçoit rien ou reçevoir un message pour dire désolé
 * ==> Résumé : Soit l'un ou l'autre c'est pas possible les 2 ..
 */

// Teacher
// Promise => "lesson"
// Promise => state "initial"  <= Une fois promise est créer ..
// Promise => "I keep It " => "Lesson"  => resolve => state "fulfilled"
// Promise => "I don't keep it " => " sorry message "  or "Nothing" => "reject" => state "rejected"

const delivredLesson = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) reject(new Error("Sorry I con't deliver this lesson "));
    resolve("The lesson is delivred..");
  }, 1000);
});

// Student
const student = delivredLesson.then(
  (result) => {
    console.log(result);
  },
  (errorHandler) => {
    console.log(errorHandler);
  }
);
// Si on est sûr que la promise va nous retourner une erreur on peux mettre que :
const studentErr = delivredLesson.catch((errorHandler) => {
  console.log(errorHandler);
});
// Mais c'est toujours préfirable d'utiliser la méthode then()

// Lesson
