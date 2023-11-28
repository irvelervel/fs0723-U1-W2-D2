// ARRAYS

// un array è un'altra struttura dati in JS
// un array è una collezione (lista) di valori

const names = ['Stefano', 'Antonio', 'Dalila', 'Vincenzo']
const numbers = [50, 0, 14.67, 100000]
const booleans = [true, true, false]

const mixed = [20, 'ciao', false, 45.45] // non sono molto utili...

const people = [
  // indice 0
  {
    name: 'Aldo',
  },
  // indice 1
  {
    name: 'Giovanni',
    skills: ['climbing', 'mimicking', 'pdorring'],
  },
  // indice 2
  {
    name: 'Giacomo',
  },
]

console.log(people[1].skills[2]) // 'pdorring'
// console.log(people[1].skills[people[1].skills.length - 1]) // 'pdorring'

// proviamo a cambiare il valore di "climbing"
people[1].skills[0] = 'Cadreghing'
console.log(people)

// per accedere ad un valore come si fa? tramite la loro POSIZIONE nell'array
// gli array in JS utilizzano una numerazione zero-based (si parte da 0)

// 'Stefano' è il primo elemento dell'array names -> ha indice 0
// 'Antonio' è il secondo elemento dell'array names -> ha indice 1
// 'Dalila' è il terzo elemento dell'array names -> ha indice 2
// 'Vincenzo' è il quarto elemento dell'array names -> ha indice 3

// per accedere ad un elemento specifico di un array si utilizza la notazione
// nomearray[indice]
console.log(names[1]) // 'Antonio'
console.log(mixed[0]) // 20
console.log(booleans[2]) // false

// se cerco un elemento con un indice non valido...
console.log(names[4]) // undefined

// se voglio ottenere 'Giovanni'...
console.log(people[1].name) // 'Giovanni'

// se cerco in un oggetto una proprietà inesistente...
console.log(people[1].age) // undefined

const pets = ['cane', 'Gatto', 'koala', 'Capybara', 'criceto']
// ogni array ha una proprietà length che rappresenta la sua lunghezza,
// ovvero il numero di elementi che contiene
// pets ha lunghezza 5
console.log(pets.length) // 5

// ogni array ha il primo elemento in posizione 0 (ha indice 0)
// l'ultima posizione valida di un qualsiasi array è length - 1

// come si aggiunge un elemento ad un array esistente?
pets.push('Pescerosso') // push è un metodo, necessita delle parentesi ()
// push() aggiunge un elemento all'array IN CODA

pets.unshift('topolino')

// ora pets è fatto così: ['topolino', 'cane', 'gatto', 'koala', 'capybara', 'criceto', 'Pescerosso']
// per eliminare "capybara":
pets.splice(4, 1) // posizione di partenza, numero di elementi da eliminare

// ora pets è fatto così: ['topolino', 'cane', 'gatto', 'koala', 'criceto', 'Pescerosso']

pets.splice(4, 0, 'Snake')

// eliminare l'ultimo elemento di un array
pets.pop() // prende l'ultimo elemento e lo fa saltare via
console.log('pets', pets)
