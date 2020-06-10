//Start by creating a variable. 
var all_buttons = document.getElementsByTagName('button'); 

// For loop which gives back an array of all the buttons. 
var copyAllButtons = []; 
for (let i=0; i < all_buttons.length; i++) { 
copyAllButtons.push(all_buttons[i].classList[1]);   
} 

console.log(copyAllButtons); 

// The function form HTML: onClick="buttonColorChange" 
// On change this is the function we want triggered. 
function buttonColorChange(buttonThingy) { 

// Basically if the value of buttonThingy is red then change the color to red. 
if (buttonThingy.value === 'red') { 
    buttonRed(); 
// If the value of buttonThingy is not red it is green so change everything to green. 
 } else if (buttonThingy.value === 'green') {
     buttonGreen(); 
 } else if (buttonThingy.value === 'reset') {
     buttonColorReset(); 
 } else if (buttonThingy.value === 'random') {
     randomColor(); 
 }  
} 

// Now we need to create those functions.  
// Creating the functions. 

function buttonRed() {
 for (let i=0; i < all_buttons.length; i++) { 
    all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
    all_buttons[i].classList.add('btn-danger');  
    }
} 

function buttonGreen() {
    for (let i=0; i < all_buttons.length; i++) { 
       all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
       all_buttons[i].classList.add('btn-success');  
       } 
   } 


function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) { 
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);   
        all_buttons[i].classList.add(copyAllButtons[i]);  
    } 
} 

// We should get a random number. SO we should use Math.floor. 
function randomColor() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'] 

for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4); // We multiply by four because their are 4 items in the array. 
    all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
    all_buttons[i].classList.add(choices[randomNumber]); 
 } 
} 






