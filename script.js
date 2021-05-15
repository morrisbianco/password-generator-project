// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var userOption = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  specialCharacters: ["!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
};

// Assignment Code
var generateBtn = document.querySelector("#generate");
var userAnwser = promptUserAnwser();
var characterLength = (choice = 8);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

function promptUserAnwser(message) {
  var message;

  if (message) {
  characterMsg = message;
  } else {
    characterMsg = "Please choose a length of at least 8 characters and no more than 128 characters.";
  };

  var choice = prompt(characterMsg);

  console.log(choice);

  if (characterLength) {
    var lowercase = confirm("Would you like to include lowercase letters?");
    console.log(lowercase);
  } else  

  if ( ) {
    var uppercase = confirm("Would you like to include uppercase letters?");
    console.log(uppercase);
  } else 

  if ( ) {
    var numbers = confirm("Would you like to include numbers?");
    console.log(numbers);
  } else 

  if ( ) {
    var specialCharacters = confirm("Would you like to include special characters?");
    console.log(specialCharacters);
  } else 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
promptUserAnwser();