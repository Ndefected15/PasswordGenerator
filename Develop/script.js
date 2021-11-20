const randomFunc = {
  lower: getRandLower,
  upper: getRandUpper,
  number: getRandNumber,
  symbol: getRandSymbol,
};
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
    passwordLength - prompt("Enter number between 8 and 128 for password length")
  }
  parseLength = parseInt(passwordLength);
  if (parseLength > 7 && parseLength < 129) {
    return parseLength
  }
  else {
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
  var length = getPassLength();
  var lowerPrompt = lowerPrompt();
  var upperPrompt = upperPrompt();
  var numberPrompt = numberPrompt();
  var symbolPrompt = symbolPrompt();
  let password = "";
  if (
    lowerPrompt == false &&
    upperPrompt == false &&
    numberPrompt == false &&
    symbolPrompt == false
  ) {
    return (password = "Please choose at least one charachter type.");
  } else {
    while (password.length < length) {
      var getType = Math.floor(Math.random() * 4)
      switch (getType) {
        case 1:
          if (lowerPrompt == true) {
            password += getRandLower();
          }
          break;
          case 2:
            if (upperPrompt == true) {
              password += getRandUpper();
            }
            break;
            case 3:
              if (numberPrompt == true) {
                password += getRandNumber();
              }
              break;
              case 0:
                if (symbolPrompt == true) {
                  password += getRandSymbol();
                }
                break;
                default:
                  console.log("error");
              ]
          
    
          }
        
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
