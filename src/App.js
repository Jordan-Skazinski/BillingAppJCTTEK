import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
import LogIn from "./LogIn.js"
//import Register from "./Register.js"
//import PasswordReset from "./PasswordReset.js"
import { today } from "./date-time";

let date = today()
// //let date_1 = new Date(2023-)
// let date_1 = new Date(RecipeData[0][1].dueDate)
// let date_2 = new Date(date)
// let difference = date_1 - date_2;
// console.log(difference);

/*
let permission = Notification.permission;
if(permission === "granted") {
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}*/
  let title = "Bill due";
  let body = `Todays date is ${date} 
  Bill's due date is ${RecipeData[0][0].dueDate}`;

function showNotification() {
   
  var notification = new Notification(title, { body });
  notification.onclick = () => { 
         notification.close();
         window.parent.focus();
  }

}
function checkForUpcomeingDueDates(){
  
for(let i = 0; i < RecipeData[0].length; i++) {
  let date_1 = new Date(RecipeData[0][i].dueDate)
  let date_2 = new Date(date)
  let difference = date_1 - date_2;
  if(RecipeData[0][i].dueDate === date){
    title = "Bill due Today!"
    body = `Todays date is ${date} 
    Bill: ${RecipeData[0][i].name}
    Bill's due date is ${RecipeData[0][i].dueDate}`;
  showNotification()
  } else if(difference === 259200000){
  title = "Bill due in three days!";
   body = `Todays date is ${date} 
   Bill: ${RecipeData[0][i].name}
    Bill's due date is ${RecipeData[0][i].dueDate}`;
  showNotification()
} else if(difference === 86400000){
  title = "Bill due tomorrow!";
   body = `Todays date is ${date} 
   Bill: ${RecipeData[0][i].name}
    Bill's due date is ${RecipeData[0][i].dueDate}`;
  showNotification()
}
}


}
//notifications, anoying
checkForUpcomeingDueDates()

/* not being used atm
function requestAndShowPermission() {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}
*/

function App() {
  /*
  this state variable is for creating the recipe RecipeCreate makes the object and RecipeList takes 
  the object and turns it into an html table
  */
  const [userNumber, setUserNumber] = useState("0")
  const [logInState, setLogInState] = useState("0")
  const [recipes, setRecipes] = useState(RecipeData[userNumber]);
  
  //this deletes the recipe by hitting the delete button that is created in RecipeList
  function deleteRecipe(recipeIndex){
    /*
    this uses the filter methoud to find every index except for the one we want to delete, 
    since its filter it creates a new array just without the to be deleted recipe object and 
    uses setRecipe to send that array back to RecipeList to rerender
    */
    setRecipes(recipes.filter((recipe, index)=>index !== recipeIndex));

  }

  return (
    
    <>
    <main>
    {logInState === "0" ? (
      <LogIn setUserNumber={setUserNumber} setLogInState={setLogInState} />
      )
      :
      (
        
        <div className="App">
      <header><h1>Bills</h1></header>

      <button 
      onClick={() => {
        
        checkForUpcomeingDueDates()

      }}
      className=" my-3 bg-red-500 text-white hover:bg-green-500">test</button>

      <RecipeList
     
      /*This is where we send the Array that we created in RecipeCreate, or after deleting a recipe with deleteRecipe,
       to RecipeList where it can then sendback the completed html table. RecipeList itself sends the table body content to PostRecipe to 
       populate it.
      */
      recipes={recipes} deleteRecipe={deleteRecipe}/>
      
      <RecipeCreate
      /*
      And this is where we send the recipes state to be updated with the new recipe created from the inout fields 
      and get sent back an array with the new recipe object inside. It is then sent to RecipeList 
      */
      recipes={recipes} setRecipes={setRecipes}/>
    </div>
    )
  }
  </main>
  </>
  );







}



export default App;