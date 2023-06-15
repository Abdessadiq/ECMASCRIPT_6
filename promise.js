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
// Promise => "I don't keep it " => " sorry message "  or "Nothing" => "reject"
const delivredMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The lesson is delivred..");
  }, 2000);
});

// Student
// Lesson
