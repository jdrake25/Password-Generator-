// Assignment Code
var generateBtn = document.querySelector(".btn");
var password = document.querySelector("#password")




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Password Data
var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}?/";
var passwordlength = 12;
var passwordValue = '';

// Create Password
function createPassword() {
  passwordValue = '';

  for (var i = 0; i < passwordLength; i++) {
    var number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
    console.log(passwordValue)
  }

  password.value = passwordValue
}
function generatePassword() {
  return "Jacquez"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


