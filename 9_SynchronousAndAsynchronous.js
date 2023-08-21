// --------- | Async Intro - Difference between Synchronous and Asynchronous, Parallel vs Non-Parallel |-----------
//! 1- Single Threated
//! 2- Synchronously Executed
//! 3- Parallel
//! 4- Non Parallel
//! 5- Asynchronous
// 6- Execution Context
// 7- Call Stack (LIFO)
//! 8- CallBack queue
//! 9- Web API
//! 10- Event Loop

//! 1-  ------------|| Single Threated ||----------------- -
// ==> Single Thread === non paralel
// C'est à dire dans un temps spécifique il  exécute "une" action
// ==> Multi Thread === paralel
// C'est à dire dans un temps spécifique il  exécute plusieurs  action  au même temps
//! 3- Parallel
//! 4- Non Parallel
//! 5- Asynchronous
//! - Asynchronous Code  ===> paralel
//! - synchronous Code  ===> Non paralel

// Le Javascript Est Single threated donc c'est Synchronous C'est à dire que
// dans javascript il faut éxécuter le code ligne par ligne avec ordre..Top To Buttom

//--- Parfois On a besoin que notre code soit Asynchronous --  Comme par Exemple
// Au moment au je vais récupérer les données dans la base de données dans une méthode
// Je veux qu'il continuer le traitement de la page jusqu'à ce que les données arrive
// Pour implémenter L'asynchonisation dans javascript il en a par exemple Promise
// Aussi Async/await des notion arriver dans js 2017 pour régler des problème dans Promise

function SayHi() {
  console.log("Hi");
}

function getUser() {
  console.log("Get User");
}
// La  fonction setTimeout ce n'est pas une fonction js mais c'est dans un timer dans le browser..
// c'est une fonctionnalité dans le web API
// Il prend dans 1er param un callback (c'est à dire quand j'utilise un fonction comme argument
// dans une autre fonctione ..) 2em param C'est une Timer


// Donc Le code Ici soit Asynchronous...
setTimeout(getUser, 1000);
SayHi();
console.log("This Last Code...");
