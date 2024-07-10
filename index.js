// DOM Manipulation : Acessing the Elements using java script to access the DOM.
const heading1 = document.getElementsByTagName("h1");
const input= document.getElementById("boxInput");
const buttonAdd= document.getElementById("Add");
const buttonList= document.getElementById ("markedlist"); 
const buttonClear= document.getElementById ("Clear"); 
const container = document.querySelector('#container');

// Created Array of the shopping list and provided the list of items and appended the list. 
// let shoppingListArray = ["Sugar", "Salt" , "Rice","Maize flour"]
let shoppingListArray= []

// console.log(shoppingListArray.length)(); 

// Appended the list items 
function renderItems(){
  container.innerHTML = ""
  shoppingListArray.forEach((item)=>{
    const li = document.createElement('li')
  const button = document.createElement('button')
  button.textContent = 'Mark purchased'
  button.addEventListener('click', function(){
  li.style.backgroundColor = 'orange'
})
li.innerHTML = item
li.appendChild(button)
container.appendChild(li) // container= (ul)
  })
}

//Newlist Rendered function allows the user to store new data in the array. 

function NewlistRendered(){
let inputtext = input.value.trim();
if (inputtext !== '' ){
  shoppingListArray.push(inputtext); 
  renderItems()
  input.value = ''; }
}

 //Event handler

 // const Addbutton = document.getElementById("boxInput").addEventListener("Add");

 //  buttonAdd.addEventListener("click", inputtext); 

 document.addEventListener('DOMContentLoaded',()=>{

  buttonAdd.addEventListener("click",NewlistRendered); 
  
  buttonClear.addEventListener("click",function(){
    shoppingListArray = []
    renderItems()});
  
 
})

