// Assignment code here 
// Variables that will enable code 
var numbers = ["0","1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","+",",",".","<",">","/","?"];
var availableOptions = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button  - Sequentially, it makes more sense to have this before the writePassword function
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// There are several functions that check if the user wants certain parameters in their password


// Below is the function that needs to be written in order to generate the password

function generatePassword() {
 //Prompts section - I initially wanted to write this as its own function and then call it within the generatePassword function, but I was having issues understanding why it wasn't working - will need to look over

userChoice = window.prompt ("Please choose (in numbers) how long you would like your password to be. Please select a number between 8 and 128");
if (userChoice < 8  || userChoice > 128) { //This part isn't working correctly - go back
  window.alert ("Please choose a number between 8 and 128!");
} else if (isNaN(userChoice)) {
  userChoice = window.prompt ("You must enter a number!");
} 

userNumber = window.confirm ("Do you want your password to use numbers?");
if (userNumber) {
  window.alert ("Your password will have numbers!")
} else {
  window.alert ("Your password will not have numbers")
}

userLower = window.confirm ("Do you want your password to have lowercase letters?");
if (userLower) {
  window.alert ("Your password will have lowercase letters!")
} else {
  window.alert ("Your password will not have lowercase letters")
}

userUpper = window.confirm ("Do you want your password to have uppercase letters?");
if (userUpper) {
  window.alert ("Your password will have uppercase letters!")
} else {
  window.alert ("Your password will not have uppercase letters")
}

userSpecial = window.confirm ("Do you want your password to have special characters?");
if (userSpecial) {
  window.alert ("Your password will have special characters!")
} else {
  window.alert ("Your password will not have special characters")
}

//Will use concat method to combine the arrays to add numbers, upper, lower, and special character arrays to available options array




}

// TO DO LIST - I was told this is called pseudo coding, and it is good practice 
  // Prompts for 
      // Length (8 - 128)
      // Lowercase
      // Uppercase
      // Special/Unique 
  // Validate input (?) and ensure at least 1 prompt is used
  // Show generated password in alert or directly on page