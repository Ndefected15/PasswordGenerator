// Assignment code here
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
