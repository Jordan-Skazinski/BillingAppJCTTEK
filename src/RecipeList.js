import React from "react";
import PostRecipe from "./PostRecipe";


function RecipeList({recipes, deleteRecipe}) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr
          //This creates the column names
          >
            <th>Bill Name</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody
        //this sends the recipes array and deleteRecipe function to post recipe where it creates the post and the returns it here inside the table body
        ><PostRecipe recipes={recipes} deleteRecipe={deleteRecipe}/></tbody>
      </table>
    </div>
  );
}

export default RecipeList;