// Assignment Code
var generateBtn = document.querySelector("#generate");

var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spec = "!@#$%^&*(){}";

// Write password to the #password input
function generatePassword(length, wantCaps, wantNums, wantSpec) {
  var charset = lower;
  if (wantCaps) charset += caps;
  if (wantNums) charset += num;
  if (wantSpec) charset += spec;
  // charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}"

  var retVal = ""; // 'v0s5Asm2'
  for (var i = 0, n = charset.length; i < length; ++i) {
    // var i = 0
    // var n  = charset.length // 62
    // i < length // 0 < 8
    // increment i by 1 // i = 0 -> i = 1

    retVal += charset.charAt(Math.floor(Math.random() * n));
    // Math.random() -> 0 - 1 = 0.85
    // 0.85 * 62 = 52.7
    // Math.floor(52.7) -> 52
    // charset.charAt(52) -> '0'
  }
  return retVal;
}

function writePassword() {

  var pwLength; // 8
  pwLength = prompt("choose a length of at least 8 characters and no more than 128 characters.")
  pwCaps = confirm("Would you like to include uppercase letters?")
  pwNums = confirm("Would you like to include number characters?")
  pwSpec = confirm("Would you like to include special characters?")

  if ((pwLength <= 128) && (pwLength >= 8)) {
    console.log(pwLength);

    var password = generatePassword(pwLength, pwCaps, pwNums, pwSpec); //'v0s5Asm2'
    alert("Password is: " + password)
    return false;
    var passwordText = document.querySelector("#password");
  } else {
    alert("Please use characters between 8-128.");
    return false;
  };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
