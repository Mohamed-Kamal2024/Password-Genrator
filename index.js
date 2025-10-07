const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

console.log(characters.length);

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
function generatePassword() {
  reset(); // Clear previous passwords
  for (let i = 0; i < 16; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);
    let randomChar2 = Math.floor(Math.random() * characters.length);
    password1El.textContent += characters[randomChar];
    password2El.textContent += characters[randomChar2];
  }
}
function reset() {
  password1El.textContent = "";
  password2El.textContent = "";
}

function copy(elementId, tooltipId) {
  const passwordEl = document.getElementById(elementId);
  const tooltipEl = document.getElementById(tooltipId);
  const password = passwordEl.textContent;
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        tooltipEl.textContent = "Password copied!";
        tooltipEl.style.display = "block";
        setTimeout(() => {
          tooltipEl.textContent = "";
          tooltipEl.style.display = "none";
        }, 1500);
      })
      .catch(() => {
        tooltipEl.textContent = "Failed to copy password.";
        tooltipEl.style.display = "block";
        setTimeout(() => {
          tooltipEl.textContent = "";
          tooltipEl.style.display = "none";
        }, 1500);
      });
  }
}
function clearPassword1() {
  password1El.textContent = "";
  document.getElementById("tooltip1").textContent = "";
  document.getElementById("tooltip1").style.display = "none";
}

function clearPassword2() {
  password2El.textContent = "";
  document.getElementById("tooltip2").textContent = "";
  document.getElementById("tooltip2").style.display = "none";
}
