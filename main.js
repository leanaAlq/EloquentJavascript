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
console.log("2.3 Chessboard");
for (let x = 0; x < size; x++) {
  x % 2 == 0 ? console.log(even(size)) : console.log(odd(size));
}
//Chapter 3: Functions
//3.1 Minimum
let minButton = document.getElementById("min");
minButton.onclick = function() {
  //ATM I knew how nice is jQuery (=, I used pure JS to get used to it. jQuery for the win!
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  console.log(typeof num1, typeof num2);
  let textnode = document.createTextNode(
    isNaN(num1) || isNaN(num2) === true
      ? "you need to enter a number, human!"
      : `minimum of ${num1} and ${num2} is: ${min(num1, num2)}`
  );
  let p = document.createElement("p");
  p.appendChild(textnode);
  document.getElementById("min-container").appendChild(p);
};

function min(x, y) {
  return x < y ? x : x === y ? "C'MON human these values are the same" : y;
}
//3.2 Recursion
function isEven(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  if (num > 0) return isEven(num - 2);
  else return isEven(num + 2);
}
let isEvenButton = document.getElementById("isEven");
isEvenButton.onclick = function() {
  let num = Number(document.getElementById("num").value);
  let textnode = document.createTextNode(
    isNaN(num)
      ? "Letters are even or odd? that's a good question."
      : isEven(num)
      ? `YES! ${num} is even`
      : `Nope! even a kid in grade one would say ${num} is odd.`
  );
  let p = document.createElement("p");
  p.appendChild(textnode);
  document.getElementById("recursion").appendChild(p);
};
//3.3 Bean Counting
function countBs(word) {
  let count = 0;
  for (var chars in word) {
    word[chars] === "B" ? count++ : "";
  }
  return count;
}
let Bcount = document.getElementById("Bcount");
Bcount.onclick = function() {
  let word = document.getElementById("word").value;
  let textnode = document.createTextNode(countBs(word));
  let p = document.createElement("p");
  p.appendChild(textnode);
  document.getElementById("beanCounting").appendChild(p);
};

// console.log(countBs("let there Be light"));
