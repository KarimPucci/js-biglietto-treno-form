/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana
*/
const age = "65" // prompt
const km = "236" // prompr
const priceForKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;

let msg, totalPrice, discountPrice;

totalPrice = km * priceForKm;

msg = `Il prezzo del biglietto è di € ${totalPrice.toFixed(2)}.`;

// anche se è una stringa lo vede come numero
if(age < 18){
  //discountPrice = totalPrice - totalPrice * discountJunior;
  discountPrice = totalPrice * (1 - discountJunior);
  msg += `
    <br>
    Essendo minorenne hai lo sconto del ${discountJunior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
  `;
}else if(age >= 65){
  discountPrice = totalPrice * (1 - discountSenior);
  msg += `
    <br>
    Essendo over 65 hai lo sconto del ${discountSenior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
  `;
}

const btnInput = document.getElementById('btnInput');






document.getElementById('output').innerHTML = msg;