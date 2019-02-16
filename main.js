// chapter 2
//2.1 Looping a triangle
let hash = "";
for (let i = 0; i < 7; i++) {
  hash += "#";

  let p = document.createElement("p");
  p.innerHTML = hash;
  document.getElementById("ch2e1").appendChild(p);
}
//2.2 FIZZBUZZ
let fizzbuzz = document.createElement("p");
document.getElementById("ch2e2").appendChild(fizzbuzz);
for (let num = 1; num <= 100; num++) {
  num % 3 == 0
    ? num % 5 == 0
      ? (fizzbuzz.innerHTML += "fizzBuzz ")
      : (fizzbuzz.innerHTML += "fizz ")
    : num % 5 == 0
    ? (fizzbuzz.innerHTML += "buzz ")
    : (fizzbuzz.innerHTML += num + " ");
}
//2.3 CHESSBOARD
// I think this could be solved in a better way..
let size = 10;
function even(num) {
  let row = "";
  for (let y = 0; y < num; y++) {
    row += y % 2 == 0 ? " " : "#";
  }
  return row;
}
function odd(num) {
  let row = "";
  for (let y = 0; y < num; y++) {
    row += y % 2 == 0 ? "#" : " ";
  }
  return row;
}
for (let x = 0; x < size; x++) {
  x % 2 == 0 ? console.log(even(size)) : console.log(odd(size));
}
