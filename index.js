// DOM Manipulation : Gets the  reference to the HTML document 
// const input=document.getElementById("Shopping"); 
// const buttonAdd= document.getElementById ("Add");
// const buttonList= document.getElementById ("markedlist"); 
// const buttonClear= document.getElementById ("listclear"); 
// const container = document.querySelector('#container'); 

const Forminput=document.getElementById("Shopping"); 
const input= document.getElementById("boxInput");
const buttonAdd= document.getElementById ("Add");
const buttonList= document.getElementById ("markedlist"); 
const buttonClear= document.getElementById ("listclear"); 
const container = document.querySelector('#container')

// Created Array of the shopping list and provided the list of items and appended the list. 

const shoppingListArray = ["Blueband", "Sugar" , "Rice","Ugaliflour"]
console.log(shoppingListArray.length)(); 

// Appended / Added the list items 
function listRendered(){
  shoppingListArray.forEach((items)=>{const li = document.createElement('li')
li.innerHTML = items
container.appendChild(li)
  })
// }

// Acess/Captures the User input : Used Event Listener. 
//let Input = [];  Array that allows the user to store the data.

function NewlistRendered(){
let inputtext = input.value.trim();
if (inputtext !== '' ){
  shoppingListArray.push(inputtext); 
  renderItems()
  input.value = ''; }
}

function userInputItems(){
document.getElementById("boxInput").addEventListener("Add");
if (boxInput!== ''){
  input.push(boxInput);
  New(); 
  boxInput.value = ''; }
}



// userInputItems !== ''? input.push(userInputItems): boxInput.value = ''; 
// if (userInputItems!== ''){
//   input.push(userInputItems);
//   renderItems(); 
//   boxInput.value = ''; 
// }


//Event handler
userInputItems.addEventListener("click", userInputItems); 


/*
- Access the user's input
- Rerieve the value entered ( access the value of the input)
- Add the value to the array ( shoppingListArray )
- we call the render items function


DOM Manipulation:
Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

Event Handling:
Attach event listeners to the "Add" button to capture user input and add items to the list.
Attach event listeners to the list of items to allow users to mark them as purchased.
Attach an event listener to the "Clear List" button to remove all items from the list.
 

Bonus Features:
Allow users to edit existing list items.
Implement persistence using local storage to save the list even after the page reloads.


*/ 
