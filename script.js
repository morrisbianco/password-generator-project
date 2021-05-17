// Object containing all of the different options for the password
var userOption = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
};

// Empty arrays for the input of the different options and then randomized password
var passwordAnwserBank = [];
var passwordAnwser = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// This function creates the password
function generatePassword() {
  // This variable forces the pop ups after the generate button is pressed
  var passwordLength = promptUserAnwser();
  // The for loop creates a randomized pattern out of the passwordAnwserBank array 
  // and then loops it till the amount matches what the user selected
  for (var i = 0; i < passwordLength; i++) {
    var passwordRandom = Math.floor(Math.random() * passwordAnwserBank.length);
// this code pushes the randomized pattern into the second empty array
    passwordAnwser.push(passwordAnwserBank[passwordRandom]);
  }
  // this code takes the array and turns it into a string for the text area to display
  return passwordAnwser.join("");
}
// This function starts the prompts
function promptUserAnwser(message) {
  var message;
// This chooses the character length prompt
  if (message) {
    characterMsg = message;
  } else {
    characterMsg = "Please choose a length of at least 8 characters and no more than 128 characters.";
  };

  choice = prompt(characterMsg);
// this makes sure that the character length is between 8 and 128 characters
  if (choice >= 8 && choice <= 128) {
    alert("Your password will be " + choice + " characters long.");
    console.log(choice);
// this code starts the criteria confirms
    var lowercase = confirm("Would you like to include lowercase letters?");
    console.log(lowercase);
    // this if statement concats the Object array into the empty array if true, and also alerts the user of their choice
    if (lowercase === true) {
      passwordAnwserBank = passwordAnwserBank.concat(userOption.lowercase);
      alert("Lowercase letters will be added to your password.");
    } else {
      alert("Lowercase letters will not be added to your password.");
    }
// Same as above but for Uppercase
    var uppercase = confirm("Would you like to include uppercase letters?");
    console.log(uppercase);
    if (uppercase === true) {
      passwordAnwserBank = passwordAnwserBank.concat(userOption.uppercase);
      alert("Uppercase letters will be added to your password.");
    } else {
      alert("Uppercase letters will not be added to your password.");
    }
// For numbers
    var numbers = confirm("Would you like to include numbers?");
    console.log(numbers);
    if (numbers === true) {
      passwordAnwserBank = passwordAnwserBank.concat(userOption.numbers);
      alert("Numbers will be added to your password.");
    } else {
      alert("Numbers will not be added to your password.");
    }
// for special characters
    var specialCharacters = confirm("Would you like to include special characters?");
    console.log(specialCharacters);
    if (specialCharacters === true) {
      passwordAnwserBank = passwordAnwserBank.concat(userOption.specialCharacters);
      alert("Special characters will be added to your password.");
    } else {
      alert("Special characters will not be added to your password.");
    }
// this code makes it so that at least one criteria must be selected
    if (lowercase === false && uppercase === false && numbers === false && specialCharacters === false) {
      alert("You must choose at least one criteria.")
      promptUserAnwser();
    } else {
      console.log(passwordAnwserBank);
    }
// This else statement makes it so that the code will rerun if the incorrect number of characters is chosen
  } else {
    var invalid = "You did not choose a length between 8 characters and 128 characters, please choose again.";
    promptUserAnwser(invalid);
  }
  // this return connects the local variable choice to the global scope for function generatePassword to use
return choice;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);