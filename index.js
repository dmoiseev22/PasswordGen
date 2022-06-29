// let numbers = [1,2,3,4,5,6,7,8,9,0]
// let letters = ["a","b","c","d"]
// let symbols = ["%","!","#","$","-","_"]
// let scope = numbers.concat(letters, symbols)

let symbols = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","%","!","#","$","-","_","_","_","_","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let randomNumber = ""

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let password3El = document.getElementById("password3")
let password4El = document.getElementById("password4")


function generatePasswords() {
    
    var passwordLength = window.prompt("Please, set password length");
    
    password1El.textContent = ""
    password2El.textContent = ""
    password3El.textContent = ""
    password4El.textContent = ""
    
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        
        password1El.textContent += symbols[randomNumber]
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password2El.textContent += symbols[randomNumber]
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password3El.textContent += symbols[randomNumber]     
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password4El.textContent += symbols[randomNumber]
    }
}

// function copyPassword1() {
//   var copyText = document.getElementById("password1El");
//   copyText.select();
//   document.execCommand("copy"); 
// }

function copyPassword1() {
    
  /* Get the text field */
  var copyText = document.getElementById("password1");
  
  /* Select the text field */
  copyText.select(); 
  
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);

}
