// Assignment code here 
// Variables that will enable code 
var numbers = ["0","1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","+",",",".","<",">","/","?"]
var pwLength //Used in the lengthCheck function
var pwNumbers
var pwLower
var pwUpper
var pwSpecial


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

//LENGTH CHECK - FINALLY WORKS

function lengthCheck() {
  pwLength = window.prompt("Please choose (in numbers) how long you would like your password to be. Please select a number between 8 and 128 ");
  if (pwLength<8) {
    window.alert("Your password isn't long enough! Please select a number equal to or greater than 8, but equal to or lower than 128");
  
  } else if (pwLength>128) {
    window.alert ("Your password is too large! Please select a number equal to or greater than 8, but equal to or lower than 128");
   
  } else if (isNaN(pwLength)) { //Had to research if there was a check for only numbers, testing to see if NaN works here 
    window.alert ("That isn't a number! Please only input numbers, i.e. 12");
    
  }
    return pwLength;
}

//Number Check
function numberCheck() {
  pwNumbers = window.prompt ("Do you want numbers in your password? Please type yes or no")
  if (pwNumbers === undefined) {
    window.alert ("Please only answer using yes or no"); // this isnt working in console currently, have to address it 
  } else if (pwNumbers === "yes") {
    pwNumbers = true;
    return pwLower;

  } else if (pwNumbers === "no") {
    pwNumbers = false;
    return pwNumbers
  }
  return pwNumbers
}


//LOWER CASE CHECK - Sort of works? True/False return properly but entering a non-yes/no answer doesn't bring up the alert

function lowerCheck() {
  pwLower = window.prompt("Do you want lowercase letters in your password? Please type yes or no ");
  if (pwLower === undefined) {
    window.alert ("Please only answer using yes or no"); // this isnt working in console currently, have to address it 
  } else if (pwLower === "yes") {
    pwLower = true;
    return pwLower;

  } else if (pwLower === "no") {
    pwLower = false;
    return pwLower
  }
  return pwLower
}


//UPPER CASE CHECK - Copied code for lowerCheck and just changed it to upperCheck - could also rewrite it as a function expression (maybe?)

function upperCheck() {
  pwUpper = window.prompt("Do you want uppercase letters in your password? Please type yes or no ");
  if (pwUpper === undefined) {
    window.alert ("Please only answer using yes or no"); // this isnt working in console currently, have to address it 
  } else if (pwUpper === "yes") {
    pwUpper = true;
    return pwUpper;

  } else if (pwUpper === "no") {
    pwUpper = false;
    return pwUpper
  }
  return pwUpper
}

//SPECIAL CHAR CHECK

function specialCheck() {
  pwSpecial = window.prompt("Do you want special characters in your password? Please type yes or no ");
  if (pwSpecial === undefined) {
    window.alert ("Please only answer using yes or no"); // this isnt working in console currently, have to address it 
  } else if (pwSpecial === "yes") {
    pwUpper = true;
    return pwSpecial;

  } else if (pwSpecial === "no") {
    pwUpper = false;
    return pwSpecial
  }
  return pwSpecial
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