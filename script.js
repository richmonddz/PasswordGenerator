// Assignment Code
var generateBtn = document.querySelector("#generate");

// create variables for password contents
var numbers = ["0123456789"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var symbols = ["@%+/'!#$^?:,)(}{][~-_."];
var passwordinternal = "";

function generatePassword() {
  var finalPassword = "";
  var length = prompt(
    "Please choose a password length of 8 and 128 characters"
  );
  var numbersyes = confirm(
    "Do you want numbers to be included into your password?"
  );
  var lowercaseyes = confirm(
    "Do you want lowercase letters included into your password?"
  );
  var uppercaseyes = confirm(
    "Do you want uppercase letters included into your password?"
  );
  var symbolsyes = confirm(
    "Do you want symbols/special characters included into your passsword?"
  );
  if (isNaN(length)) {
    alert("Please put a numerical value between 8 and 128");
  }
  if (length < 8 || length > 128)
    alert("Please choose a number between 8 and 128.");
  else if (!numbersyes && !lowercaseyes && !uppercaseyes && !symbolsyes) {
    alert("Please choose at least 1 parameter for the password");
    return generatePassword;
  }
  if (numbersyes === true) {
    passwordinternal += numbers;
  }
  if (lowercaseyes === true) {
    passwordinternal += lowercase;
  }
  if (uppercaseyes === true) {
    passwordinternal += uppercase;
  }
  if (symbolsyes === true) {
    passwordinternal += symbols;
  }
  for (var i = 0; i < length; i++) {
    finalPassword += passwordinternal.charAt(
      Math.floor(Math.random() * passwordinternal.length)
    );
  }
  return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
