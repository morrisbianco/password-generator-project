// GIVEN I need a new, secure password
// WHEN I click the button to generate a password *
// THEN I am presented with a series of prompts for password criteria *
// WHEN prompted for password criteria DONE
// THEN I select which criteria to include in the password DONE
// WHEN prompted for the length of the password DONE
// THEN I choose a length of at least 8 characters and no more than 128 characters *
// WHEN prompted for character types to include in the password DONE
// THEN I choose lowercase, uppercase, numeric, and/or special characters DONE
// WHEN I answer each prompt DONE
// THEN my input should be validated and at least one character type should be selected *
// WHEN all prompts are answered DONE
// THEN a password is generated that matches the selected criteria *
// WHEN the password is generated *
// THEN the password is either displayed in an alert or written to the page *

var userOption = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  specialCharacters: ["!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
};

var passwordAnwser = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
var userAnwser = promptUserAnwser();
// var characterLength = (choice.value >= 8 || choice.value <= 128);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // var random = Math.floor(Math.random() * passwordAnwser.length);
  // password = passwordAnwser[random];
}

function promptUserAnwser(message) {
  var message;

  if (message) {
  characterMsg = message;
  } else {
    characterMsg = "Please choose a length of at least 8 characters and no more than 128 characters.";
  };

  var choice = prompt(characterMsg);

  if (choice >= 8 && choice <= 128) {
    // Insert Password Length code
    alert("Your password will be " + choice +" characters long.");
  } 
  // else {
  //       var invalid = "You did not choose a length between 8 characters and 128 characters, please choose again."; 
  //       promptUserAnwser(invalid);
  //   }

  console.log(choice);

  // if (choice.value >= 8 || choice.value <= 128) {
  //   return choice;
  // } else {
  //     // var invalid = "You did not choose a length between 8 characters and 128 characters, please choose again."; 
  //     // promptUserAnwser(invalid);
  // }

    var lowercase = confirm("Would you like to include lowercase letters?");
    console.log(lowercase);
    if (lowercase === true) {
      passwordAnwser.push(userOption.lowercase);
      alert("Lowercase letters will be added to your password.");
    } else {
      alert("Lowercase letters will not be added to your password.");
    }

    var uppercase = confirm("Would you like to include uppercase letters?");
    console.log(uppercase);
    if (uppercase === true) {
      passwordAnwser.push(userOption.uppercase);
      alert("Uppercase letters will be added to your password.");
    } else {
      alert("Uppercase letters will not be added to your password.");
    }
  
    var numbers = confirm("Would you like to include numbers?");
    console.log(numbers);
    if (numbers === true) {
      passwordAnwser.push(userOption.numbers);
      alert("Numbers will be added to your password.");
    } else {
      alert("Numbers will not be added to your password.");
    }
  
    var specialCharacters = confirm("Would you like to include special characters?");
    console.log(specialCharacters);
    if (specialCharacters === true) {
      passwordAnwser.push(userOption.specialCharacters);
      alert("Special characters will be added to your password.");
    } else {
      alert("Special characters will not be added to your password.");
    }

    console.log(passwordAnwser);
  }
//     if (lowercase, uppercase, numbers, specialCharacters === false) {
//       alert("You must choose at least one criteria.")
//       promptUserAnwser();
//     } else {
//       console.log(passwordAnwser);
//     }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
