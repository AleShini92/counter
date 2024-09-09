// Created element
const main = document.createElement("main");
const counter = document.createElement("section");
const minus = document.createElement("div");
const number = document.createElement("div");
const plus = document.createElement("div");

// Add class 
main.className = "container";
counter.className = "container__counter";

//minus
minus.className = "button";
minus.textContent = "-";

// Counter number
number.className = "number";
number.textContent = 0;

// plus 
plus.className = "button";
plus.textContent = "+";

// append element 
document.body.appendChild(main);
main.appendChild(counter);
counter.appendChild(minus);
counter.appendChild(number);
counter.appendChild(plus);



/*
*
*   Function add() and min()
*   pass the function to the
*   const plus and minus
*/

plus.addEventListener("click", add);
minus.addEventListener("click", min);

let value = 0;
number.style.color = "red";

function add() {
    value++;
    number.textContent = value;
    number.style.color = "white";
}


function min() {
    if (value > 0) {
        value--;
    }

    number.textContent = value;

    // Turn minus red when the value reaches 0
    number.style.color = value === 0 ? "red" : "white";
}