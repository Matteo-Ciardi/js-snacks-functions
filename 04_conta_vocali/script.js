/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function onlyVocals(word) {
    let vocals = [
        "a", "e", "i", "o", "u"
    ]
    let numberOfVocals = 0;

    for (let i = 0; i < word.length; i++) {

        for (let j = 0; j < vocals.length; j++) {
            if (word[i] === vocals[j]) {
                numberOfVocals++;
            }
        }
    }

    return numberOfVocals
}

// Invoca la funzione qui e stampa il risultato in console
console.log(onlyVocals(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)