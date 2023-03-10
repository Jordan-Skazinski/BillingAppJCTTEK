import React, { useState } from "react";


function RecipeCreate({recipes, setRecipes}) {
  //this variable is for reseting the inputs after the user hits "create"
 const initialFormState = {
   name: "",
   amount: "",
   dueDate: "",
   notes: "",
 };

 //formData holds the current state, which will be intialFormState at first, untell the user inputs text into the input fields
 const [formData, setFormData] = useState({...initialFormState});
//this function is for saveing the info put into the input boxes it is updated when anything is changed in the input field
  const handleChange = ({target}) => {
  //creating a new state to overwrite whats in initialFormState
    setFormData({
      //...formData is to make a copy of the current formData object
      ...formData,
      //and then we match the key to the target name, like "cuisine", and override its value with what is in the input field 
      [target.name]: target.value,
    });
  };
  //this activates when the submit button is clicked
  const handleSubmit = (event) => {
    //stops the page from refreshing
    event.preventDefault();
    //this sends back the compleated object to App.js that will then be passed to RecipeList
    setRecipes([...recipes, formData]);
    //resets the input fields with  initialFormState object
    setFormData({...initialFormState});
  }
 
  return (
    <form 
    //has onSubmit to send the data when you hit the button 
    name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
             <input
               id="name"
               type="text"
               name="name"
               //updates formData.name whith whatever you put in value
               onChange={handleChange}
               //allows the app to get the input field text
               value={formData.name}
               //text inside the input field to match the mockup
               placeholder="Name"
               //stops you from posting a recipe without a name
               required={true}
               className="
               rounded
               border
               flex
               my-1
               

               "
             />
            </td>
            <td htmlFor="amount">
              <input
                id="amount"
                type="text"
                name="amount"
                onChange={handleChange}
                value={formData.amount}
                placeholder="amount"
                required={true}
                className="
                rounded
                border
                flex
                my-1
                

                "
              />
            </td>
            <td htmlFor="dueDate">
              <input
                id="dueDate"
                type="text"
                name="dueDate"
                onChange={handleChange}
                value={formData.dueDate}
                placeholder="$"
                //dont have  required={true} because its anoying to input everytime
                className="
                rounded
                border
                flex
                my-1
                
                
                "
              />
            </td>
            <td htmlFor="notes">
              <textarea
                id="notes"
                type="textarea"
                name="notes"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="notes"
                required={true}
                className="
                rounded
                border
                flex
                my-1
                
                
                "
              />
            </td>
            <td>
              <button className="
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
              //the button for onSubmit
              type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;