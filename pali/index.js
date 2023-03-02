'use strict'

//prompt per avere una parola in una variabile
// let parola = prompt('inserisci parola');

// //dare variabili per gl'index 
// let prima = '';
// let seconda = '';

// //con un ciclo stampiano la parola come se fosse un array
 
// for(let i = 0; i < parola.length; i++){
//     prima = parola[i];
//     console.log(parola[i]);    
// }

// //poi con un altro ciclo lo stampiamo al contrario

// for(let i = parola.length -1; i >= 0; i--){
//     seconda = parola[i];
//     console.log(seconda);

// }
 
// //se corrispondono sono Pali
// // console.log(prima[i]);
// // console.log(seconda[i]);

// if(prima === seconda ){
//     console.log('pali')
//     //se non corrispondono non sono Pali
// }else{
//     console.log('no pali')
// }




/*****************************************
 *          correzione
 * ***************************************
 */

//function

function isPali(input){
    // const prova = true;
    // return prova;
    // console.log(input);
    let nuovaParola = '';
    for(let i = input.length -1; i>= 0; i--){
        nuovaParola += input[i];  
     }

     if(nuovaParola === input){
        return true;
     }else{
     return false;
     }
}
 
//main

// const parola = prompt('inserisci parola');
const defaultTesto = 'osso';


console.log(isPali(defaultTesto));

if(isPali('osso')){
    console.log('osso is pali');
} else{
    console.log('osso non is pali');
}

const defaultTesto2 = 'giacomino';
console.log(isPali(defaultTesto2));

if(isPali('giacomino')){
    console.log('giacomino is pali');
} else{
    console.log('giacomino is non is pali');
}

// isPali(parola); //vero falso
// isPali('testo'); //vero falso
// isPali(defaultTesto); //vero falso


// console.log(isPali('asads'));
