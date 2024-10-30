/*array iteration, DOM manipulation, and event handling to create an interactive shopping list application.*/

// DOM Manipulation event listener : 
document.addEventListener('DOMContentLoaded', () => {
  //1. Geeting the Elements using document.getElement by Id,TagName or ClassName 

  // Created Array of the shopping list and provided the list of items and appended the list. 
  const shoppingList = ["Sugar", "Salt", "Rice", "Maize flour"];

  //delete eventhandler. 
  // The function will take/holds the bought list and store them in the done list; 
  const handleDeletebtn = (e) => {
    e.preventDefault();
    e.target.parentNode.remove();
    const boughtDiv = document.querySelector('#boughtdiv');
    const newUl = document.createElement('ul');
    const newli = document.createElement('li');
    
    // Removes the button from the list item. 
    const removelist = e.target.parentNode;

    // Where the list item will be stored. 
    newli.textContent =removelist.textContent.replace("clear", "");//replacing "Done" with an empty string.

    //append/added items 
    newUl.appendChild(newli);
    boughtDiv.appendChild(newUl);
  }
  handleDeletebtn;

// Appended the shopping list: 
function appendItems(list) {
  list.forEach(item => {
    const newDiv = document.querySelector('#newdiv')
    const ul = document.createElement('ul')
    const li = document.createElement('li');
    li.textContent = item;
   
    //create a button that will be to delete the list. 
    const buttonDelete = document.createElement("button");
    buttonDelete.className = "button"

    // the button will be named clear 
    buttonDelete.textContent = "clear";

    // create a handle event for the delete button 
    buttonDelete.addEventListener('click', handleDeletebtn);

    // append the button to the li element. 
    li.appendChild(buttonDelete);
    ul.appendChild(li); // append li to ul 
    newDiv.appendChild(ul);
  });

}
appendItems(shoppingList);

// function that handles form event-listener 
// takes in the new list and adds them to the existing list 
function handleForm(addlist) {
  // get the ul/li element
  const ul = document.querySelector('ul')
  const li2 = document.createElement('li');
  li2.className = 'li2';

  // //Pushes the new list to the array list 
  // let inputInfo = inputlist.value.trim();
  // let newaddlist=shoppingList.push(inputInfo);
  // li2.textContent = inputInfo;

  li2.textContent = addlist;


  //create a button that will be used to delete the list item 
  const buttonDelete = document.createElement("button");
  buttonDelete.className = "button"

  // set the button to clear 
  buttonDelete.textContent = "clear";

  // event listener to handle the delete action
  buttonDelete.addEventListener('click', handleDeletebtn);

  // append the elements 
  li2.appendChild(buttonDelete);
  ul.appendChild(li2);
}
handleForm;

//form event listener 
const inputform = document.getElementById("inputform");
inputform.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputInfo = e.target.inputlist.value.trim();
  handleForm(inputInfo);
  inputform.reset(); // reset the form
})

  // const button = document.createElement('button')
  // button.textContent = 'Mark purchased'
  // button.addEventListener('click', function(){
  // li.style.backgroundColor = 'orange'

  //Clear button 
  //  document.querySelector("#Clear").addEventListener("click", function(){ shoppingList = [];
  //  renderItems()});

})
