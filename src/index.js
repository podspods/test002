const counterEl = document.querySelector('.counter')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const resetBtn = document.querySelector('.reset')
let count = 0

// Indentation
plusBtn.addEventListener('click', function () {
  count++
  counterEl.innerHTML = count
})

// Désindentation
minusBtn.addEventListener('click', function () {
  if (count > 0) {
    count--
    counterEl.innerHTML = count
  }
})

// Remise à zéro
resetBtn.addEventListener('click', function () {
  count = 0
  counterEl.innerHTML = count
})
