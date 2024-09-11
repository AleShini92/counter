// Created element
const main = document.createElement("main");
const counter = document.createElement("section");
const minus = document.createElement("div");
const number = document.createElement("div");
const plus = document.createElement("div");

// add text

const text = document.createElement("h1");
text.textContent = "Count everything you need =)";
text.className = "text";
main.appendChild(text);


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

const p = document.createElement("p");
main.appendChild(p);
p.style.marginTop = "10px";
p.textContent = `Sorry :(... you need to add a number`;



/*
*
*   Function add() and min()
*   pass the function to the
*   const plus and minus
*/

let value = 0;
number.style.color = "red";

// when click on plus element
plus.addEventListener("click", () => {
    value++;
    number.textContent = value;
    number.style.color = "white";
    p.textContent = ""
});

// when click on minus element
minus.addEventListener("click", () => {
    if (value > 0) {
        value--;
    }
    number.textContent = value;

    // Turn number red when the value reaches 0
    number.style.color = value === 0 ? "red" : "white";

    p.textContent = value === 0 ? "Sorry :(... you need to add a number" : "";
});
