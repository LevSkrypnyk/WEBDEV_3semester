
"use strict";

// Portion Calculator
const minusButton = document.querySelector("#portion-minus");
const plusButton = document.querySelector("#portion-plus");
const portionCount = document.querySelector("#portion-count");

let portions = 2;

function updatePortions() {
    portionCount.textContent = portions;
}

minusButton.addEventListener("click", () => {
    if (portions > 1) {
        portions--;
        updatePortions();
    }
});

plusButton.addEventListener("click", () => {
    portions++;
    updatePortions();
});
