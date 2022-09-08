let readlineSync = require ('readline-sync');
let vuelta1 = readlineSync.questionInt("Indique el tiempo de la primera vuelta: ");
let vuelta2 = readlineSync.questionInt("Indique el tiempo de la segunda vuelta: ");
let vuelta3 = readlineSync.questionInt("Indique el tiempo de la tercera vuelta: ");
let vuelta4 = readlineSync.questionInt("Indique el tiempo de la cuarta vuelta: ");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log('Tiempo total: ', tiempoTotal);
console.log('Promedio total de vueltas: ', tiempoTotal/4);