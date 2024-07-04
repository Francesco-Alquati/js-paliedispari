// SCEGLI PARI DISPARI
const scelta_utente = prompt("Scegli 'pari' o 'dispari': ").toLowerCase();
  
// INSERISCI UN NUMERO DA 1 A 5
let numero_utente = parseInt(prompt("Inserisci un numero da 1 a 5: "));


function PariDispari() {

    // GENERO UN NUMERO RANDOM DA 1 A 5
    const numero_computer = Math.floor(Math.random() * 5) + 1;
    console.log(`numero random  = ${numero_computer} `)

    // SOMMA DEI 2 NUMERI
    const somma = numero_utente + numero_computer;

    //  DETERMINO SE LA SOMMA È PARI O DISPARI
    const risultato = evenOrOdd(somma);

    // DETERMINO IL VINCITORE
    let messaggio_vittoria;
    if (scelta_utente === "pari" && risultato) {
        messaggio_vittoria = `il numero è ${somma}, Hai vinto!`;
    } else if (scelta_utente === "dispari" && !risultato) {
        messaggio_vittoria = `il numero è ${somma}, Hai vinto!`;
    } else {
        messaggio_vittoria = `il numero è ${somma}, Hai perso!`;
    }

    // VISUALIZZO IL RISULTATO
    alert(messaggio_vittoria);
}

function evenOrOdd(numero){
    if(numero % 2 == 0 ){
        return true;
    }
    return false;
}

PariDispari();

