
const row = document.querySelector(".row");


for (let i = 1; i <= 100; i++) {
    // div
    const square = document.createElement("div");
    // aggiungo la classe al div
    square.classList.add("square");

    //FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        square.textContent = "FizzBuzz";
        square.style.backgroundColor = "#f0466f";
    } else if (i % 3 === 0) {
        square.textContent = "Fizz";
        square.style.backgroundColor = "#0cd6a1";
    } else if (i % 5 === 0) {
        square.textContent = "Buzz";
        square.style.backgroundColor = "#ffd166";
    } else {
        square.textContent = i;
    }

    // aggiungo il div alla row
    row.append(square);
}