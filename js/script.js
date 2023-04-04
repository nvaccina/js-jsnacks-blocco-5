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
    firstname: 'Maria',
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

/*
jSnack 2
Abbiamo un elenco degli studenti di una facoltà.
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti.

*BONUS*
Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome
*/

const elencoStudenti = [
  {
    firstname: 'Paolo',
    lastname: 'Rossi',
    matricola: 1,
    voti: [9,6,7,8],
  },
  {
    firstname: 'Maria',
    lastname: 'Pieri',
    matricola: 2,
    voti: [5,4,3,8],
  },
  {
    firstname: 'Giovanni',
    lastname: 'Trovato',
    matricola: 3,
    voti: [4,6,7,7],
  },
  {
    firstname: 'Marco',
    lastname: 'Liberato',
    matricola: 4,
    voti: [2,7,8],
  },
  {
    firstname: 'Lucia',
    lastname: 'Ceccarelli',
    matricola: 5,
    voti: [9,6,4,7],
  },  {
    firstname: 'Alessandra',
    lastname: 'Buongiorno',
    matricola: 4,
    voti: [10,5,7,8],
  },
  {
    firstname: 'Giuseppe',
    lastname: 'Arrivederci',
    matricola: 4,
    voti: [2,7,8,1],
  },
]
const container = document.querySelector('.container');

function ordineAlfabetico(x, y){
  if (x.lastname < y.lastname) {return -1;}
  if (x.lastname > y.lastname) {return 1;}
  return 0;
}
let studentiOrdinati = elencoStudenti.sort(ordineAlfabetico);
console.log('studentiOrdinati',studentiOrdinati);

studentiOrdinati.forEach( (studente) => {

  const {firstname, lastname, matricola, voti} = studente;

  let somma = 0;
  for(let i = 0; i < voti.length; i++){
    somma += parseInt(voti[i]);
  }
  const mediaVoti = somma / voti.length;

  const card =`
    <div class="card mx-2 my-3" style="width: 14rem;">
      <img src="img/user.webp" class="card-img-top" alt="user">
      <div class="card-body">
        <h5 class="card-title">${firstname} ${lastname}</h5>
        <p class="card-text">Matricola: ${matricola}</p>
        <p class="card-text">Media voti: ${mediaVoti.toFixed(1)}</p>
      </div>
    </div>
  `
  
  container.innerHTML += card;
});


