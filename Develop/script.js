// Random Functions
function getRandLower() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandUpper() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandNumber() {
  var number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
}

function getRandSymbol() {
  var symbol = "!@#$%^&*()<>_-+=[]{}?.,`";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

// Prompts for password
var lowerPrompt = function () {
  var c = confirm("Would you like to include lower case characters?");

  if (c == true) {
    return true;
  } else {
    return false;
  }
};

var upperPrompt = function () {
  var c = confirm("Would you like to include upper case characters?");
  if (c == true) {
    return true;
  } else {
    return false;
  }
};

var numberPrompt = function () {
  var c = confirm("Would you like to include numbers?");
  if (c == true) {
    return true;
  } else {
    return false;
  }
};

var characterPrompt = function () {
  var c = confirm("Would you like to include symbols?");
  if (c == true) {
    return true;
  } else {
    return false;
  }
};

// generate the password

function generatePassword() {
  var lengthPrompt = window.prompt(
    "Choose Password length between 8 and 128 characters:"
  );

  if (
    lengthPrompt === "" ||
    lengthPrompt === null ||
    lengthPrompt > 128 ||
    lengthPrompt < 8
  ) {
    window.alert("You need to enter a number between 8 and 128. Try Again.");
    return generatePassword();
  } else {
    return lengthPrompt;
  }
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
