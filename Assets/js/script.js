// Variables
var finalPassword = [];
var passwordLength = 8;
var symbolsArr = ["!@#$%^&*?+="];
var lowerCaseArr = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbersArr = ["0123456789"];


// Prompts Function
function prompts() {
  // Password Length Prompt
  passwordLength = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 - 128 characters long).")); 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Length must be a numeric value and between 8 - 128 characters...");
    return false;
  }
  // Lowercase Letters Confirmation
  if (confirm("Do you want lowercase letters included in your password?")) {
    finalPassword = finalPassword + lowerCaseArr;
  }
  
  // Uppercase Confirmation
  if (confirm("Do you want uppercase letters included in your password?")) {
    finalPassword = finalPassword + upperCaseArr;
  }

  // Symbols Confirmation
  if (confirm("Do you want symbols (ex: !, @, #, &) included in your password?")) {
    finalPassword = finalPassword + symbolsArr;
  }

  // Numbers Confirmation
  if (confirm("Do you want numbers included in your password?")) {
    finalPassword = finalPassword + numbersArr;
  }
  return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordChoice = prompts();
  var passwordText = document.querySelector("#password");
  if (passwordChoice) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCombo = Math.floor(Math.random() * finalPassword.length);
    password = password + finalPassword[randomCombo];
  }
  return password;
}


// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
