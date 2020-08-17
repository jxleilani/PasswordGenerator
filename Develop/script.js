// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var howLong = prompt("How many characters long? (Max 20)");
  

  if((howLong > 0) && (howLong < 21)){
    var passLength = parseInt(howLong);

    var lowerPrompt = confirm("Do you want to use lower case letters?");
    var upperPrompt = confirm("Do you want to use upper case letters?");
    var numberPrompt = confirm("Do you want to use numbers?");
    var symbolPrompt = confirm("Do you want to use symbols? Ex:!@#$%^&*()_+-=~<>[]{}\/|?,.;:");
    var passwordString = "";
    var finalPassword = "";

    for(let i = 0; i < passLength; i++ ){ //THIS IS TWICE AS LONG AS I WANT IT TO BE HOW WOULD I DO IT ONCE?
        if(lowerPrompt){
          randomLower();
          passwordString += randomLower();
        }
        if(upperPrompt){
          randomUpper();
          passwordString += randomUpper();
        }
        if(numberPrompt){
          randomNumber();
          passwordString += randomNumber();
        }
        if(symbolPrompt){
          randomSymbol();
          passwordString += randomSymbol();
        }
    }


    finalPassword += passwordString.substr(0, passLength);

    //I used 56 and 57 to test the difference between the two variables until I got it to work
    // console.log("String: " + passwordString);
    // console.log("Password: " + finalPassword);
    
  }else{
    alert(howLong + " is not a valid number, try again.");
  }


  return finalPassword;

}


// Functions
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}

function randomSymbol(){
  const symbols = "!@#$%^&*()_+-=~<>[]{}\/|?,.;:";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

