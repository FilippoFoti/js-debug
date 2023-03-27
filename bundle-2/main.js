/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// SOLUZIONE ESERCIZIO 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// 1. ciclo for da 0 a 4
// 2. < al posto del >
// 3.

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// SOLUZIONE ESERCIIZIO 2
// function addIfEven(num = 2) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }
// console.log(addIfEven());

// 1. Se il numero è pari aggiunge 5
// 2. = assegnazione (errore) === è identità (corretto)
// 3.


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// SOLUZIONE ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// // console.log(loopToFive())
// loopToFive()

// 1. Crea un loop fino al numero 5 (non compreso)
// 2. Al posto delle virgole bisogna mettere i punti e virgola
// 3.


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

// SOLUZIONE ESERCIZIO 4
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    // console.log(evenNumbers);
    return evenNumbers;
}
console.log(displayEvenNumbers()); // [2,4,6,8]

// 1. Pusha i numeri pari in una nuova array
// 2. Return fuori dal ciclo For, punti e vinrgola, 
// 3.