const counterEl = document.querySelector('.counter')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const resetBtn = document.querySelector('.reset')
let count = 0

plusBtn.addEventListener('click', function () {
  count++
  counterEl.innerHTML = count
})

minusBtn.addEventListener('click', function () {
  if (count > 0) {
    count--
    counterEl.innerHTML = count
  }
})

resetBtn.addEventListener('click', function () {
  count = 0
  counterEl.innerHTML = count
})
