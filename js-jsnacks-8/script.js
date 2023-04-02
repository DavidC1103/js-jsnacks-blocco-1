const numeroUtente = prompt('inserisci un numero di 4 cifre')
 let sommaCifre = 0

for(let i = 0; i < numeroUtente.length; i++){

    sommaCifre += parseInt(numeroUtente[i]);
}