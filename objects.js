// OGGETTI IN JS
// un oggetto è una "collezione" di proprietà appartenenti alla stessa "entità"
// ovvero un insieme di proprietà che ha senso racchiudere in un unico "corpo"
// se diversi valori fanno parte di una stessa entità, ha senso racchiuderli in un oggetto

const obj = {} // un oggetto in questo caso vuoto

const comedian = {
  // un oggetto contiene una lista (potenzialmente infinita)
  // di coppie "chiave: valore", separate tramite virgola
  // i valori delle proprietà possono essere quello che voglio: stringhe,
  // numeri, booleani, oggetti, undefined, null, etc.
  // in un oggetto il valore viene assegnato alla propria chiave tramite i :
  firstName: 'Giovanni',
  lastName: 'Storti',
  age: 66,
  gender: 'male',
  partOfOriginalDuo: true,
  location: {
    region: 'Lombardia',
    city: 'Milano',
    address: {
      street: 'Via Roma',
      number: 1,
      zipCode: 12345, //
    },
  },
  exhibitions: {
    bulgari: true,
    nico: true,
  },
  'name-of-the-trio': 'Aldo, Giovanni e Giacomo',
  skills: ['climbing', 'mimicking'],
}

console.log('COMEDIAN', comedian)

// una singola coppia chiave: valore è detta PROPRIETÀ dell'oggetto

// LETTURA PROPRIETÀ DI UN OGGETTO
// come leggo o accedo ad una proprietà dell'oggetto comedian?

// DUE METODI
// 1) DOT NOTATION
console.log(comedian.lastName) // 'Storti'
console.log(comedian.age)
console.log(comedian.location.address.zipCode) // 12345

console.log(
  'Mi chiamo ' +
    comedian.firstName + // 'Giovanni'
    ' ' +
    comedian.lastName + // 'Storti'
    ', ho ' +
    comedian.age + // 66
    ' anni. Ho fatto parte del trio ' +
    comedian['name-of-the-trio']
)

// 2) SQUARE BRACKETS NOTATION []
console.log(comedian['lastName']) // 'Storti'

// la square brackets notation funziona specialmente quando c'è bisogno di leggere
// il valore di una proprietà con il nome "strano"
// console.log(comedian.name-of-the-trio) // non funziona :(
console.log(comedian['name-of-the-trio']) // 'Aldo, Giovanni e Giacomo"

// MODIFICA DI UNA PROPRIETÀ, con un nuovo valore
comedian.firstName = 'Giacomo'
comedian.lastName = 'Poretti'
comedian.partOfOriginalDuo = false
comedian.age = 67
comedian.exhibitions.nico = false
// anche se abbiamo definito comedian come const, questo non ci limita minimanente
// nel cambiare il valore delle sue proprietà

delete comedian.location // elimino dall'oggetto la proprietà "location"
comedian.mostPopularCharacter = 'Tafazzi' // creo una proprietà completamente da zero!

console.log(comedian)

// QUIZ A PREMI (non è vero) aka "Inganno della cadrega"
let a = 5
let b = a // 5
b = 10

console.log(a) // ? è rimasto 5

// ---------
const objA = {
  name: 'Stefano',
}

const objB = objA

objB.name = 'Andrea'

console.log(objA.name) // ? 'Andrea'
// come mai? perchè alla riga 93 JS NON HA creato un nuovo oggetto, ma ha solamente
// messo in memoria un nuovo "riferimento" all'oggetto creato per objA.

// c'è modo per creare una vera e propria "copia" di objA?
// 1) Object.assign()
// 2) spread operator -> ...

const objC = Object.assign({}, objA) // questo crea un vero e proprio CLONE di objA
objC.name = 'Aldo'

console.log(objA.name) // 'Andrea'
console.log(objC.name) // 'Aldo'
