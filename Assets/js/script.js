// Assignment code here
var randomLowerCase = getRandomLowercase();
var randomUpperCase = getRandomUppercase();
var randomSymbol = getRandomSymbol();
var randomNumber = getRandomNumber();
var passwordLength = lengthSelection();

prompt=("How many characters do you want your password to be? (Must be between 8 - 128 Character).")

function generatePassword() {
  if (addLowerCase === true) {
    getRandomLowercase();
  } else if (addUpperCase === true) {
    getRandomUppercase();
  } else if (addSymbol === true) {
    getRandomSymbol();
  } else if (addNumber === true) {
    getRandomNumber();
  } 
  return(passwordLength+ randomLowerCase + randomUpperCase + randomSymbol + randomNumber * passwordLength);
}


function lengthSelection() {
  var userLength = prompt("Please choose a password length between 8 - 128 characters."); 
  var length = parseInt(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60);
  for (var i = 8; i <= length; i++);
  return length + userLength;
}
console.log(typeof passwordLength);




var addLowerCase = confirm("Would you like lowercase letters in your password?");
if (confirm === true) {
  getRandomLowercase();
}
else (confirm === false); {
  // alert("No lowercase letter will be added to your password.");
}

var addUpperCase = confirm("Would you like uppercase letters in your password?");
if (confirm === true) {
  getRandomUppercase();
} else (confirm === false); {
  // alert("No uppercase letters will be included in your password.");
}

var addSymbol = confirm("Would you like to add a special character to your password?")
if (addSymbol === true) {
  getRandomSymbol();
} else (addSymbol === false)


var addNumber = confirm("Would you like to add numbers to you password?");
if (addNumber === true) {
  getRandomNumber();
} else (addNumber === false)
  null;



  // "getRandom" Functions
function getRandomLowercase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUppercase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomSymbol() {
  var symbol = "!@#$%&*?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function getRandomNumber() {
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
} console.log(getRandomNumber);



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
