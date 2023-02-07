/*
Exercice du compteur
*/

/*
En utilisant des fonctions :
- Lorsque je clique sur "+" le compteur augmente de 1
- Lorsque je clique sur "-" le compteur diminue de 1
- Lorsque je clique sur "reset" le compteur se remet à 0
*/

const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonReset = document.querySelector('.reset')
let compteur = document.querySelector('.counter')
let x = 0

buttonPlus.addEventListener('click', () => {
  x += 1
  console.log((compteur.innerText = x))
})
buttonMinus.addEventListener('click', () => {
  if (x > 0) {
    x -= 1
  } else {
    x = 0
  }

  console.log((compteur.innerText = x))
})

buttonReset.addEventListener('click', () => {
  x = 0
  console.log((compteur.innerText = x))
})
