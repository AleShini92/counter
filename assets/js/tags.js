/**
 * 
 *  { elements }
 *  tags HTML
 * 
 */


// Created element
const main = document.createElement("main");
const counter = document.createElement("section");
const minus = document.createElement("div");
const number = document.createElement("div");
const plus = document.createElement("div");
const p = document.createElement("p");

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

// p
p.style.marginTop = "10px";
p.textContent = `Sorry :(... you need to add a number`;

// append element 
document.body.appendChild(main);
main.appendChild(counter);
main.appendChild(p);
counter.appendChild(minus);
counter.appendChild(number);
counter.appendChild(plus);

// created file audio
const audio = new Audio("../assets/audio/click.mp3");


// export all const
export { main, counter, minus, number, plus, text, p, audio };