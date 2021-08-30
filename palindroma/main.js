/*
CREO UN ALGORITMO IN GRADO DI STABILIRE SE UNA PAROLA SIA PALINDROMA O MENO 
*/
//creo una variabile che sara' l'ancora per il nostro bottone da utilizzare per la valutazione
var start = document.getElementById('verifica');

//generiamo il nostro click
start.addEventListener('click',function(){

 //creo una variabile che sara' la nostra parola inserita nell input
var parola = document.getElementById('parola').value;


//inserisco dei controlli che impediscano di lasciare il campo input vuoto che contenga numeri e che sia troppo corto per un confronto
if(parola==""){
    alert('il campo la tua parola non deve essere vuoto')
     location.reload()
} else if(!isNaN(parola)){
    alert('la tua parola non può contenere numeri')
     location.reload()
}else if((parola.length <= 3)){
    alert('parola non confrontabile poiché troppo corta  ritenta')
     location.reload()
}
//fine controlli campo input

 //creo una variabile che servira' per richiamare la mia funzione giraParola()
 var reverseWord = giraParola(parola);
 document.getElementById('parolaGirata').innerHTML=reverseWord



//UTILIZZO LA COMPARAZIONE CON IF  IF-ELSE  PER STABILIRE SE LA PAROLA SIA O MENO PALINDROMA
if(parola === reverseWord){
    document.getElementById('risultato').innerHTML='PALINDROMA'
} else {
    document.getElementById('risultato').innerHTML='NON PALINDROMA'
}
})



//FINE SEZIONE CLICK PER VEDERE SE LA PAROLA SIA PALINDROMA O NO

//CREIAMO UN PULSANTE CHE PERMETTA DI ANNULLARE E RIPARTIRE CON LA VERIFICA
var annulla = document.getElementById('annulla')
annulla.addEventListener('click',function(){

    location.reload()

})


//SPAZIO DEDICATO ALLE FUNZIONI PER IL MIO ALGORITMO------------------------------------------------------
//FUNZIONE  CHE PERMETTERA' DI GIRARE LA MIA PAROLA INSERITA TRAMITE CICLO FOR DA RICHIAMARE DENTRO AL MIO FORM
function giraParola(parola){
var parolaGirata =''

for(var i = parola.length -1; i >= 0; i--){
    parolaGirata +=parola[i]

}
return parolaGirata
}

