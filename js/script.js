// Un alert espone 5 numeri casuali diversi.

console.log("hello world");
var numeriCasuali = 0;
var numeri = "";
var array = [];
for (var i = 0; i < 5; i++) {
var numeroGenerato = parseFloat(Math.floor(Math.random() * 100));
numeri += " " + numeroGenerato.toString();
array.push(numeroGenerato)
}
alert("i numeri sono " + numeri)
// console.log(numeri);
console.log(array);


// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
var secondiScelti = 30;
var numeriUtente ;
setTimeout(numeriDaInserire, secondiScelti * 1000)

var risultato = 0;
// ------------------------------- funzioni ----------------------------

function numeriDaInserire() {
  for (var i = 0; i < 5; i++) {
    numeriUtente = prompt("inserire numeri")
    console.log(numeriUtente);
    risultato += verifica(parseInt(numeriUtente), array)
    console.log(risultato);
  }
  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  alert("sono stati ricordati " + risultato + " numeri");
}
function verifica(numero, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) return 1;
  }
  return 0;
}
function numeroRicordato(numero, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) return array[i].toString();
  }
  return "";
}
