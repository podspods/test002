console.log('Bonjour :)')

//Recuper la valeur de span
const valeurCompteur = document.querySelector('.counter')

//créer un événement au buton + plus
document.querySelector('.plus').addEventListener('click', CompteurPlus)

let compteur = 0
//Ajouter la fonction compteur plus
function CompteurPlus() {
  compteur += 1
  console.log(compteur)
  valeurCompteur.innerHTML = compteur
}

//créer un événement au buton + minus
document.querySelector('.minus').addEventListener('click', CompteurMinus)
// créer la fonction CompteurMinus
function CompteurMinus() {
  if (compteur <= 0) {
    compteur = 0
    console.log(compteur)
    valeurCompteur.innerHTML = compteur
  } else {
    compteur -= 1
    console.log(compteur)
    valeurCompteur.innerHTML = compteur
  }
}

//créer un événement au buton RESET
document.querySelector('.reset').addEventListener('click', CompteurReset)
// créer la fonction reset
function CompteurReset() {
  compteur = 0
  console.log(compteur)
  valeurCompteur.innerHTML = compteur
}
