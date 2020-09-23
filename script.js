// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
// console.log(special[3]);

var pwLength = prompt( "please enter desired length of password");
if (pwLength <= 128 && pwLength >= 8){
  alert("success");
}
else{
  alert("make sure the input is between 8-128 characters long")
}
var pwSpecial = confirm(
  "add special characters?"
);
var pwNumbers = confirm(
  "add numbers?"
);
var pwLowAlphabet = confirm(
  "add lowercase letters?"
);
var pwUpAlphabet = confirm(
  "add uppercase letters?"
);
var pwStore ="";

if (pwSpecial) {
  pwStore = pwStore.concat(special);
}
if (pwNumbers) {
  pwStore = pwStore.concat(numbers);
}
if (pwLowAlphabet) {
  pwStore = pwStore.concat(lowAlphabet);
}

if (pwUpAlphabet) {
  pwStore = pwStore.concat(upAlphabet);
}

var pwArray = pwStore.split("");

var password ="";

for (let i = 0; i < pwLength; i++) {
  var randomChar = pwArray[Math.floor(Math.random() * pwArray.length)];

  password = password.concat(randomChar);
}

return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
