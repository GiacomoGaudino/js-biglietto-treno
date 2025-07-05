console.log("Hi there")

/* Il programma dovrà chiedere all'utente
 -il numero di chilometri che vuole percorrere  
 -l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole:
 -il prezzo del biglietto è definito in base ai km (0.21 € al km)
 -va applicato uno sconto del 20% per i minorenni
 -va applicato uno sconto del 40% per gli over 65.
 -L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
  
*/

/*tools
 -let/const
 -console.log
 -if/else-if/else
*/

// utente fornisce numero km

const kilometres = prompt("inserisci km da percorrere")
console.log(kilometres)

// utente fornisce età passeggeri

const age = prompt("età del passeggero")
console.log(age)

// calcolo costo biglietto

let price = kilometres * 0.21
let text = price.toLocaleString("it-IT", { style: "currency", currency: "EUR" })
console.log(price)

// sconto under 18 e sconto over 65

if (age < 18) {
    price = price - (price * 20 / 100)
    console.log(price)
} else if (age > 65) {
    price = price - (price * 40 / 100)
    console.log(price)
} else {
    console.log(price)
}

// risultato finale con 2 decimali

console.log(price.toFixed(2))
