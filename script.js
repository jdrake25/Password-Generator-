// Assignment Code
var generateBtn = document.querySelector(".btn");
var password = document.querySelector("#password")




// Write password to the #password input
function writePassword() {
  var password = getUserInput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getUserInput() {
  var verified =false;
  var passwordLength;
  while (!verified) {
    passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
      if (passwordLength >= 8 && passwordLength <= 128) {
        verified = true;
      } else {
        alert("Password must be between 8 and 128 characters");
    }
  }
  verified=false;
  while (!verified) {
    var uselowercase = confirm("Would you like lowercase letters?");
    var useuppercase = confirm("Would you like uppercase letters");
    var usenumbers = confirm("Would you like to use numbers");
    var usespecialcharacters = confirm("Would you like to use special characters");
    if (uselowercase || usenumbers||useuppercase||usespecialcharacters) {
      
      verified = true;
    } else {
      alert("You must choose at least one character type");
    }
  }
  return  generatePassword(passwordLength,uselowercase,useuppercase,usenumbers,usespecialcharacters);
}
// Password Data
function generatePassword(passwordLength,uselowercase,useuppercase,usenumbers,usespecialcharacters) {
var passwordValue = '';
var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var allcharacters = ""
var specialcharacters="!@#$%^&*()+{}?"
if (uselowercase){
  allcharacters += lowercase;
}
if (useuppercase){
  allcharacters += uppercase;
}
if (usenumbers){
  allcharacters += numbers;
}
if (usespecialcharacters){
  allcharacters += specialcharacters;
}
// Create Password

  for (var i = 0; i < passwordLength; i++) {
    var number = Math.floor(Math.random() * allcharacters.length);
    passwordValue += allcharacters.substring(number, number + 1);
    console.log(passwordValue)
  }

  return passwordValue;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


