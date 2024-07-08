// Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)

// DOM Manipulation 
const input=document.getElementById("Shopping"); 
const buttonAdd= document.getElementById ("add");
const buttonList= document.getElementById ("markedlist"); 
const buttonClear= document.getElementById ("listclear"); 
const container = document.querySelector('#container'); 

// Created Array, and appended the list. 

const shoppingListArray = ["Blueband", "Sugar" , "Rice","Ugaliflour"]

function listRendered(){
  shoppingListArray.forEach((items)=>{const li = document.createElement('li')
li.innerHTML = items
container.appendChild(li)
  })
}



