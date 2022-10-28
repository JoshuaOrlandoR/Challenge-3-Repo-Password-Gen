// Assignment code here 
// Variables that will enable code - These can be global there are no issues based on their scope 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //Could have probably used lowercase.toUpperCase method here but no actual difference 
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","+",",",".","<",">","/","?"];
var availableOptions = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button  - Sequentially, it makes more sense to have this before the writePassword function
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 //Prompts section 
  userChoice = window.prompt ("Please choose (in numbers) how long you would like your password to be. Please select a number between 8 and 128");
    if (userChoice < 8  || userChoice > 128) { // Found a workaround for the initial problem 
      window.alert ("Please choose a number between 8 and 128 and try again!");
      userchoice;
    } else if (isNaN(userChoice)) {
      userChoice = window.prompt ("You must enter a number!");
    
    } 

// found the window.confirm method on W3 schools, easily stores boolean values for each prompt for use later
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

  if (userNumber === false && userLower === false && userUpper === false && userSpecial ===false) { //Forces the user to pick at least one condition to be true, cannot generate a password with no eligable characters
    window.alert ("You cannot have 0 characters! Please select at least one of numbers, lowercase, uppercase, or special characters")
  }; 

//Will use concat method to combine the arrays to add numbers, upper, lower, and special character arrays to available options array
//Each of these if statements check the boolean value of the prompts, any that are true get added to the empty availableOptions array, which will be used for the password

if (userNumber) {
  availableOptions = availableOptions.concat(numbers);
}

if (userLower) {
  availableOptions = availableOptions.concat(lowerCase)
}

if (userUpper) {
  availableOptions = availableOptions.concat(upperCase)
}

if (userSpecial) {
  availableOptions = availableOptions.concat(special)
}


var createPassword = "" // I initially had this within the for loop, but it would break the code
for (var i=0; i < userChoice; i++) {
  var random = [Math.floor(Math.random() * availableOptions.length)]; 
  createPassword = createPassword + availableOptions[random];
}
return createPassword;
}


// Write password to the #password input - Might be more correct to move this to the end because it is referencing the generatePassword function, and this is the function that is writing the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// TO DO LIST - I was told this is called pseudo coding, and it is good practice 
  // Prompts for 
      // Length (8 - 128)
      // Lowercase
      // Uppercase
      // Special/Unique 
  // Validate input (?) and ensure at least 1 prompt is used
  // Show generated password in alert or directly on page