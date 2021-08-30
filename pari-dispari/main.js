/*
ALGORITMO GIOCO PER IL PARI E DISPARI 
*STEP1 CHIEDO ALL'UTENTE TRAMITE PROMPT PARI O DISPARI,
*STEP2 INSERISCO I CONTROLLI PER ERVITARE CHE SI INSERISCANO PARAMETRI DIFFERENTI DA PARI O DISPARI
*STEP3 CHIEDERE ALL' UTENTE UN NUMERO DA 1 A 6 SEMPRE TRAMITE PROMPT
*STEP4 INSERISCO I CONTROLLI PER ERVITARE CHE SI INSERISCANO PARAMETRI DIFFERENTI DA VALORI NUMERICI
 E CHE IL MINIMO SIA 1 E MASSIMO 6
*STEP5 CREO UNA FUNZIONE CHE GENERI UN NUMERO RANDOM PER IL PC SEMPRE DA 1 A 6
*STEP7 RICHIAMO LA FUNZIONE IN UNA VARIABILE 
STEP 8 SOMMO  I DUE NUMERI CON UNA VARIABILE SOMMA
*STEP9 CREO DUE FUNZIONI PER IL PARI E PER IL DISPARI IN VERIFICA
*STEP10 CREO UNA FUNZIONE CHE VERIFICHI SE L'UTENTE ABBIA VINTO O MENO
*STEP11 UTILIZZO UN IF ELSE PER VERIFICARE E RICHIAMARE LA FUNZIONE CHE VALUTA SE ABBIA VINTO L'UTENTE O
LA MACCHINA
*/

//STEP1 UTILIZZO UN DO WHILE PER SICUREZZA
do {
   var scelta = prompt('scelgi pari o dispari')
} while ((scelta!='pari')&&(scelta!='dispari'));
console.log(scelta);

do {
   var numeroUmano = parseInt(prompt('scegli un numero da 1 a 6'))
} while ((numeroUmano < 1)||(numeroUmano > 6)||(isNaN(numeroUmano)));
console.log(numeroUmano);

function numberRandom (min, max) {
   return Math.floor(Math.random()*(max-min +1)+min)
}
var numeroPc = numberRandom(1,6)
console.log(numeroPc);

var somma = numeroUmano + numeroPc
console.log(somma);

function pari (numero) {
   if(numero % 2 == 0){
      return true
   } else {

      return false
   }
}
function dispari (numero) {
   if(numero % 2 != 0){
      return true
   } else {

      return false
   }
}

function victory (somma, scelta) {
   if((pari(somma)&&(scelta)=='pari')||(dispari(somma)&&(scelta)=='dispari')){

      return 'utente'
   } else {

      return 'pc'
   }
}

var vincitore = victory(somma,scelta)

if(vincitore=='utente'){

   alert('hai vinto bravo ')
} else {

   alert('ha vinto il computer mi spiace')
}
