// DATA-TYPES primitivi in JS!
// string -> 'Paperino'
// number -> 100.57
// boolean -> false
// undefined -> il valore di una variabile non ancora settato o di una variabile inesistente
// null -> l'assenza ESPLICITA di un valore

let wombat = 'Gigi' // creo una variabile di nome wombat, il cui valore iniziale è una stringa
wombat = 'Giovanni' // poichè la variabile wombat è stata creata tramite la parola chiave "let",
// il suo valore è ri-assegnabile in futuro. ATTENZIONE: evitiamo tuttavia di cambiare il valore
// di wombat con un TIPO DI DATO DIVERSO!
// wombat = false <-- brutto!

const sealedValue = 'https://www.epicode.com'
const piGreco = 3.14
// motivi per cui usare const:
// 1) ottimizzazione, una variabile il cui valore non può cambiare in futuro
// "pesa" meno a livello di applicativo
// 2) sono comode anche per evitare di sovrascriverne il valore accidentalmente
// non è ammesso cambiare il valore di una "variabile" dichiarata con const

// JS supporta tutte le basiche operazioni matematiche
// con delle variabili numeriche è possibile usare + - * / % (operatori matematici)

// operatori LOGICI
// < <= > >= === !==

// 5 < 3 -> FALSE
// 5 > 3 -> TRUE
// 10 <= 10 -> TRUE
// 10 === 10 -> TRUE
// 10 !== 10 -> FALSE

// == è un operatore valido ma poco consigliato, perchè confronta due valori
// ignorando il loro tipo, quindi otterremmo che '10' == 10 -> TRUE :(
// facciamo finta che non esista, e usiamo solamente i ===, che effettuano un confronto
// sia nel valore che nel tipo :) '10' === 10 -> FALSE :)

// AND, OR e NOT
//  &&  ||    !

// && unisce due condizioni e produrrà un valore complessivo di TRUE solamente
// se TUTTE le parti in gioco sono a loro volta TRUE.
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// (5 < 3) && (4 === 4) => false && true => false
// (5 > 3) && (4 === 4) => true && true => true

// || unisce due condizioni e produrrà un valore complessivo di TRUE almeno
// se UNA delle parti in gioco sarà a sua volta TRUE.
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// ! quello che fa è INVERTIRE il significato di un'espressione
// !true => false
// !false => true

// TERNARY OPERATOR
// per effettuare l'assegnazione di un valore ad una variabile sulla base di una condizione
// è possibile usare un "operatore ternario"

let userIsSubscribedToNewsletter = true // l'utente è iscritto alla newsletter

let discount = userIsSubscribedToNewsletter ? '25%' : '5%'

// = condizione rispettata ? valore se sì : valore se no
// l'utente è iscritto alla newsletter? se sì, ha il 25% di sconto. se no, ha il 5%
