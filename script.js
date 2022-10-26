// Assignment code here 
// Variables that will enable code 





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

// Below is the function that needs to be written in order to generate the password
function generatePassword() {
  // console.log("Button press test")  - tested to see if the button worked, it does
 
 }
 
















// TO DO LIST - I was told this is called pseudo coding, and it is good practice 
  // Prompts for 
      // Length (8 - 128)
      // Lowercase
      // Uppercase
      // Special/Unique 
  // Validate input (?) and ensure at least 1 prompt is used
  // Show generated password in alert or directly on page