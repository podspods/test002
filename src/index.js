


let count = 0;

const plusButton = document.querySelector(".plus");
plusButton.addEventListener("click", function () {
    count++;
    document.querySelector(".counter").innerHTML = count;
});

const minusButton = document.querySelector(".minus");
minusButton.addEventListener("click", function () {
    
    if(count > 0){

        count--;
        document.querySelector(".counter").innerHTML = count;
    }
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
    count = 0;
    document.querySelector(".counter").innerHTML = count;
});



