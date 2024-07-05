// DEFINISCO UNA FUNZIONE CON PARAMETRO E CON VALORE DI RITORNO
function verificaPalindromo(parola) {

    // CONVERTO IN MINUSCOLO
    parola = parola.toLowerCase();

     // INDICI PER PER SCORRERE LA PAROLA
    let i = 0;
    let j = parola.length - 1;

    // CONFRONTO I CARATTERI DA ENTRAMBE LE ESTREMITà
    while (i < j) {
        if (parola[i] !== parola[j]) {
        return false;
        }
        i++;
        j--;
    }
    return true;

}

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
let parola_utente = prompt("Inserisci una parola: ");

// VERIFICO SE LA PAROLA è PALINDROMA
if (verificaPalindromo(parola_utente)) {
    alert(parola_utente + " è un palindromo!");
 } else {
    alert(parola_utente + " non è un palindromo.");
}

