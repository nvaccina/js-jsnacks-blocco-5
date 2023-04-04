/*
jSnack 1
Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65
*/
const users = [
  {
    firstname: 'Paolo',
    lastname: 'Rossi',
    age: 14,
  },
  {
    firstname: 'Luigi',
    lastname: 'Pieri',
    age: 17,
  },
  {
    firstname: 'Giovanni',
    lastname: 'Trovato',
    age: 32,
  },
  {
    firstname: 'Marco',
    lastname: 'Perso',
    age: 70,
  },
  {
    firstname: 'Lucia',
    lastname: 'Rossi',
    age: 20,
  }
]

const minorenni = users.filter( (user) => user.age < 18)
console.log(minorenni);

const over65 = users.filter( (user) => user.age >= 65)
console.log(over65);