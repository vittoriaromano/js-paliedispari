'use strict'

//prompt per avere una parola in una variabile
let parola = prompt('inserisci parola');


//con un ciclo stampiano la parola come se fosse un array
function normale (){
for(let i = 0; i < parola.length; i++){
}
}

//poi con un altro ciclo lo stampiamo al contrario
function rovescio (){
for(i < parola.length -1;i >= 0; i--){
}
}

//se corrispondono sono Pali
if(normale == rovescio){
    console.log('pali')
     //se non corrispondono non sono Pali
}else if(normale !== rovescio){
    console.log('no pali')
}
