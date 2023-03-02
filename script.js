// Assignment Code
 var generateBtn = document.querySelector("#generate");

// Declare varibles for the password.
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Declaring variables for confirmation of password criteria.
 var confirmLength = "";
 var confirmLowercase;
 var confirmUpperCase;
 var confirmNumeric;
 var confirmSpecial;

function generatePassword(){
// 1. Series of prompts for the pw criteria.
 // The length should be  8 to 128 and provide confirmation.
  var confirmLength = (prompt("Password length: Choose at least 8 to no more than 128 characters."));
  if(confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters. Try again");
    var confirmLength = (prompt("Password length: Choose at least 8 to no more than 128 characters."));
  }

 // Determine if lowercase uppercase, numbers, special character is needed.
  var confirmLowercase = confirm("Would like to include lowercase characters?");
  var confirmUpperCase = confirm("Would like to include UPPERCASE characters?");
  var confirmNumeric = confirm("Would like to include numeric characters?");   
  var confirmSpecial = confirm("Would like to include special characters?"); 

 
// 2. Validate the input to have at least one character type.
  if(confirmUpperCase === false && confirmLowercase === false && confirmSpecial === false && confirmNumeric === false) {
   alert("At least one character type should be selected.");
   var confirmLowercase = confirm("Would like to include lowecase characters?");
   var confirmUpperCase = confirm("Would like to include UPPERCASE characters?");
   var confirmNumeric = confirm("Would like to include numeric characters?");   
   var confirmSpecial = confirm("Would like to include special characters?"); 
  }
 

// 3. Generate the password  based on the criteria. 

 var passwordCharacters = []
      
 if (confirmSpecial) {
  passwordCharacters = passwordCharacters.concat(special)
 }

 if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(number)
 }
  
 if (confirmLowercase) {
  passwordCharacters = passwordCharacters.concat(lowercase)
 }

 if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(uppercase)
 }


// 4. Display password. 
  var yourPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    yourPassword = yourPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return yourPassword;
}


// 5. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // this line displays it in the screen
  
}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

