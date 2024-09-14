import { main, counter, minus, number, plus, text, p, audio } from "./tags.js";

/*
*
*   Function 
*   plus() and minus()
*/

let value = 0;
number.style.color = "red";

// when click on plus element
plus.addEventListener("click", () => {
    value++;
    number.textContent = value;
    number.style.color = "white";
    p.textContent = "";

    audio.play();
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

    audio.play();
});
