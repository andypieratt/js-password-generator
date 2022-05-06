// Assignment code here
function getRandomLowercase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split;
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUppercase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split;
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomSymbol() {
  var symbols = "!@#$%&*?".split;
  return symbols[Math.floor(Math.random() * symbol.length)];
}

function getRandomNumber() {
  var numbers = "0123456789".split;
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
