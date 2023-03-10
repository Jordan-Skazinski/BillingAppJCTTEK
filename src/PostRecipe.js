
import React from "react";
  function PostRecipteData({recipes, deleteRecipe}){
    return recipes.map(({name, amount, dueDate, notes}, index) => { 
       return(
        {
        name:{name},
        amount:{amount},
        dueDate:{dueDate},
        notes:{notes}
      }
      )
    })
  }
  //takes in the recipe information from App.js and the deleteRecipe function in App.js
  function PostRecipe({recipes, deleteRecipe}) {
    //useing map to make the rows, takeing in deconstructed name, cuisine type, photo html, ingredients, and instructions from the recipeData array, or anyy other array
    return recipes.map(({name, amount, dueDate, notes}, index) => {
       return ( 
        <tr key={index}
        //creating an index so that we can referance it later for deletRecipe, also because react likes haveing unique indexs
        >
          <td
          //name cell
          //takes the current name from the current indexed iteration recipes object
          >{name}</td>
          <td
          //cuisine cell
          //does the same as above but for cuisine
          >{amount}</td>
          <td
          //img cell

          //does the same as above but formated for an img
          >{dueDate}</td>
          <td className="content_td flex"
          //ingrediants cell
          ><p
          //they are then inserted as paragraphs for the same reason
          >{notes}</p></td>

          <td><button  className="
            mr-1
            bg-blue-500 
            text-white 
            font-bold 
            py-2 
            px-8 
            rounded 
            shadow 
            border-2 
            border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all 
            duration-300"
          //the delete button, has an onClick function to referance deleteRecipe function, which itself has the key index of the current recipe so it can remove it
          name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
          <button  className="
            
            bg-blue-500 
            text-white 
            font-bold 
            py-2 
            px-8 
            rounded 
            shadow 
            border-2 
            border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all 
            duration-300"
          //the delete button, has an onClick function to referance deleteRecipe function, which itself has the key index of the current recipe so it can remove it
          name="edit" onClick={() => deleteRecipe(index)}>Update</button>
          </td>
        </tr> );
    })
  }
export default PostRecipe;
export {PostRecipteData};