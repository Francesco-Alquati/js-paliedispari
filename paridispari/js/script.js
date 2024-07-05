function PariDispari() {

    // GENERO UN NUMERO RANDOM DA 1 A 5
    return Math.floor(Math.random() * 5) + 1;
}
function evenOrOdd(numero){

    // CONTROLLO SE PARI O DISPARI
    if(numero % 2 == 0 ){
        return true;
    }
    return false;
}

// SCEGLI PARI DISPARI
let scelta_utente = prompt("Scegli 'pari' o 'dispari': ").toLowerCase();
while(scelta_utente != 'pari' && scelta_utente != 'dispari'){
    scelta_utente = prompt("Devi inserire un valore tra 'pari' e 'dispari'. Reinserisci di nuovo")
    
} 

// INSERISCI UN NUMERO DA 1 A 5
let numero_utente = parseInt(prompt("Inserisci un numero da 1 a 5: "));
while(isNaN(numero_utente) || numero_utente < 1 || numero_utente > 5){
    numero_utente = parseInt(prompt("Devi inserire un numero da 1 a 5. Reinseriscilo di nuovo"));
}

// GENERO IL NUMERO DEL COMPUTER RICHIAMANDO LA FUNZIONE
let numero_computer = PariDispari()
console.log(`numero random  = ${numero_computer}`)

// SOMMA DEI 2 NUMERI
let somma = numero_utente + numero_computer;

//  DETERMINO SE LA SOMMA È PARI O DISPARI
let risultato = evenOrOdd(somma);

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



