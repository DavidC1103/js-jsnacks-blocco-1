//creo array vuoto
const numbers = []
console.log(numbers);


//chiedo per 6 volte di inserine un numero 
for (let i = 0; i < 6; i++){
    //inserire (parseInt) per trasformare in numero la stringa
    let insNumber = parseInt(prompt('Inserisci un numero'));

    //seleziono i numeri pari
    if (insNumber % 2 == 0) {
    
    //quelli dispari
    } else {
        //li pusho nell'array vuota
        numbers.push(insNumber)
        
    }
}
console.log(numbers);


