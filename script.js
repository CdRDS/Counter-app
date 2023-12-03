const addButton = document.querySelector(".add_button");
const subtractButton = document.querySelector(".subtract_button");
const saveButton = document.querySelector(".save_button");
const resetButton = document.querySelector(".reset_button");
const counterH1 = document.querySelector(".counter");
const body = document.querySelector("body");
const result = document.querySelector(".result");
let counter = 0;
// let result;

function updateBackgroundColor() {
    if (counter < 0) {
        body.style.backgroundColor = "rgb(250,233,233)";
    } else if (counter >= 0 && counter <= 5) {
        body.style.backgroundColor = "rgb(246,248,250)";
    } else if (counter > 5 && counter <= 10) {
        body.style.backgroundColor = "rgb(233,248,233)";
    } else {
        body.style.backgroundColor = "rgb(214,229,243)";
    }
}

addButton.addEventListener("click", (e) => {
    counter++;
    counterH1.innerText = counter;
    updateBackgroundColor();
});

subtractButton.addEventListener("click", (e) => { 
    counter--;
    counterH1.innerText = counter;
    updateBackgroundColor();
});


saveButton.addEventListener("click", (e) => {
    if (result.innerText === "") {
        result.innerText = counter;
    } else {
        result.innerText += ", " + counter;
    }
});

resetButton.addEventListener("click", (e) => {
    result.innerText = "";
});