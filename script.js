// Assignment Code
var generateBtn = document.querySelector("#generate");

// create variables for password contents
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = [
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
];
var lowercase = [
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
];
var symbols = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function generatePassword() {
  var pwlength = prompt(
    "Please choose a password length of 8 and 128 characters"
  );
  if (isNaN(pwlength)) {
    alert("Please put a numerical value between 8 and 128");
    return generatePassword();
  }
  if (pwlength < 8 || pwlength > 128)
    alert("Please choose a number between 8 and 128.");
  return generatePassword();
}
var numbersyes = confirm(
  "Do you want numbers to be included into your password?"
);
if (numbers) {
  passwordinternal += numbers;
}
var lowercaseyes = confirm(
  "Do you want lowercase letters included into your password?"
);
if (lowercaseyes) {
  passwordinternal += lowercase;
}
var uppercaseyes = confirm(
  "Do you want uppercase letters included into your password?"
);
if (uppercaseyes) {
  passwordinternal += uppercase;
}
var symbolsyes = confirm(
  "Do you want symbols/special characters included into your passsword?"
);
if (symbolsyes) {
  passwordinternal += symbols;
}
var passwordinternal = "";

if (!numbersyes && !lowercaseyes && !uppercaseyes && !symbolsyes) {
  alert("You must at least choose 1 character type!");
}
for (var i = 0; i < pwlength; i++) {
  result += passwordinternal.charAt(
    Math.floor(Math.random() * passwordinternal.length)
  );
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
