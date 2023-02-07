console.log("Bonjour :)");

const plus = document.querySelector('.plus')
const moin = document.querySelector('.minus')
const raz = document.querySelector('.reset')
let cpt = 0



function fplus(){
    return cpt += 1
}
function fminus(cpt){
    if (cpt != 0) 
        cpt -= 1 
    return cpt 
} 
    

function freset() {
    return cpt = 0
}

plus.addEventListener('click', () => {
    console.log('plus')
    cpt = fplus()
    console.log(cpt)
  })
moin.addEventListener('click', () => {
    console.log('minus')
    cpt = fminus(cpt)
    console.log(cpt)
  })
raz.addEventListener('click', () => {
    console.log('reset')
    cpt = freset()
    console.log(cpt)
  })


