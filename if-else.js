// LOGICA CONDIZIONALE
// IL BLOCCO "if"

// un blocco "if" è composto da due parti: una condizione, e un "body"

// if(condizione) {
//     blocco di istruzioni
// }

// il blocco di istruzioni viene eseguito SOLAMENTE se la condizione torna TRUE

let myName = 'Mario'
const examResult = 15 // il voto di Giovanni

if (examResult >= 18 || myName === 'Mario') {
  // vedrò questo messaggio solamente se examResult è ALMENO pari a 18
  console.log(
    'Complimenti ' + myName + ", hai passato l'esame con il voto " + examResult
  )
  if (examResult >= 25) {
    console.log('E che risultato! Congratulazioni!')
  }
} else {
  // qui finiamo se la condizione specificata NON torna true
  console.log('Mi dispiace somaro, hai fatto schifo! Il voto è ' + examResult)
}

console.log('fine')

// valore truthy
// si traduce come un valore booleano di true
if ('stefano') {
  console.log('ciao!')
}

let anotherExamResult = 14

if (anotherExamResult < 15) {
  console.log('che brutto voto!')
} else if (anotherExamResult < 18) {
  console.log('mannaggia, per un pelo!')
} else {
  console.log("hai passato l'esame")
}
