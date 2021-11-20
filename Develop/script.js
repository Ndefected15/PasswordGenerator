// Random Functions

function getRandLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandSymbol() {
  const symbols = "!@#$%^&*()<>_-+=[]{}?.,`";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Prompts for password

var getPassLength = function () {
  var passwordLength = "";
  var parseLength;

  while (passwordLength == "" || passwordLength == null) {
    passwordLength = prompt(
      "Enter number between 8 and 128 for password length"
    );
  }
  parseLength = parseInt(passwordLength);
  if (parseLength > 7 && parseLength < 129) {
    return parseLength;
  } else {
    window.alert("Invalid range, please try again");
    getPassLength();
  }
};

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

var symbolPrompt = function () {
  var c = confirm("Would you like to include symbols?");
  if (c == true) {
    return true;
  } else {
    return false;
  }
};

// generate the password

function generatePassword() {
  var length = getPassLength();
  var lower = lowerPrompt();
  var upper = upperPrompt();
  var number = numberPrompt();
  var symbol = symbolPrompt();
  let password = "";
  if (lower == false && upper == false && number == false && symbol == false) {
    return (password = "Please choose at least one charachter type.");
  } else {
    while (password.length < length) {
      var getType = Math.floor(Math.random() * 4);
      switch (getType) {
        case 1:
          if (lower == true) {
            password += getRandLower();
          }
          break;
        case 2:
          if (upper == true) {
            password += getRandUpper();
          }
          break;
        case 3:
          if (number == true) {
            password += getRandNumber();
          }
          break;
        case 0:
          if (symbol == true) {
            password += getRandSymbol();
          }
          break;
        default:
          console.log("error");
      }
    }
  }
  return password;
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
