/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function groupByfirstLetter(names) {
    let firstLetter = [];

    for (let i = 0; i < names.length; i++) {

        if (names[i][0] === "A") {
            firstLetter.push(names[i]);
        }
    }

    return firstLetter
}

// Invoca la funzione qui e stampa il risultato in console
console.log(groupByfirstLetter(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]