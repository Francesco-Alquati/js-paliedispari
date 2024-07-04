function PariDispari() {

    // SCEGLI PARI DISPARI
    const scelta_utente = prompt("Scegli 'pari' o 'dispari': ").toLowerCase();
  
    // INSERISCI UN NUMERO DA 1 A 5
    let numero_utente = parseInt(prompt("Inserisci un numero da 1 a 5: "));

    // GENERO UN NUMERO RANDOM DA 1 A 5
    const numero_computer = Math.floor(Math.random() * 5) + 1;

    // SOMMA DEI 2 NUMERI
    const somma = numero_utente + numero_computer;
}