'use strict'

// //funzione per sommare i numeri facilmente dopo (FUNZIONE 1)
// function sommaNumeri(num1, num2 = 0) {
//      return num1 + num2;
//  }


// //prompt scegliere il numero 
// const number = parseInt(prompt('scegli un numero'));
// console.log(number);

// //prompt scegliere pari o dispari
// const evenOdd = prompt('pari o dispari');
// console.log(evenOdd);


// // generialo numero randomico tra 1 e 5
// const numeroRandom = Math.floor(Math.random()*5)+1;
// console.log(numeroRandom);


// //sommiamo i due numeri con la funzione iniziale (SOMMA)
// let somma = sommaNumeri(number, numeroRandom);
// console.log(somma);

// //se pari=pari Win, se dispari=dispari Win altrimenti hai perso 
//  const sommaPari ='';
//  const sommaDispari ='';

// if((somma % 2 == 0) & (evenOdd =='pari') ){    
//     sommaPari = console.log('paripari W')
    
// }if((somma % 2 !== 0) & (evenOdd == 'dispari') ){
//     sommaDispari = console.log('disparidispari W')
    
// }else{
//     console.log('niente L')
// }
    


/*****************************************
 *          correzione
 * ***************************************
 */

//funcion
function getRnInteger(min = 1, max = 5){
    return Math.floor(Math.random() * (max - min +1) ) + min;
}

function isEven(number){
    //restituisce true se pari
    //false se dispari

    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}




//main
const userChoise = prompt('pari o dispari');
const userNumber = Number(prompt('numero'));
const cpuNumber = getRnInteger(); // funzione gener numero random ,le ()sono vuote perche sono gia messe nella funzione

const sum = userNumber + cpuNumber;
const result = isEven(sum);



console.log(cpuNumber);
console.log(userNumber);
console.log(sum);
console.log('pari', result)


if((userChoise === 'pari' && result === true) || (userChoise === 'dispari' && result === false)){
    console.log('utente vince');
}else{
    console.log('utente perde');
}