'use strict'

//funzione per sommare i numeri facilmente dopo (FUNZIONE 1)
function sommaNumeri(num1, num2 = 0) {
    return num1 + num2;
}

//funzione per i numeri pari o dispari (FUNZIONE 2)
function evenOdd(){
    if(sommaNumeri % 2 === 0 ){
        console.log('even')
    }else{
        console.log('odd')
    }
}