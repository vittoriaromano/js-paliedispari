'use strict'

//prompt per avere una parola in una variabile
let parola = prompt('inserisci parola');

//dare variabili per gl'index 
let prima = '';
let seconda = '';

//con un ciclo stampiano la parola come se fosse un array
 
for(let i = 0; i < parola.length; i++){
    prima = parola[i];
    console.log(parola[i]);    
}

//poi con un altro ciclo lo stampiamo al contrario

for(let i = parola.length -1; i >= 0; i--){
    seconda = parola[i];
    console.log(seconda);

}
 
//se corrispondono sono Pali
// console.log(prima[i]);
// console.log(seconda[i]);

if(prima === seconda ){
    console.log('pali')
    //se non corrispondono non sono Pali
}else{
    console.log('no pali')
}
