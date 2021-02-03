import React, {useState} from 'react'
import axios from "axios"
//recipe_id
//recipe_name
//author
//category
//time
//img
//recipe_private T or F

// (/api/recipes) post/get
//(/api/recipies/:${id}) put/delete

//step_id
//step_text
//step_order (null)


//ingredient_name
//ingredient_id

//step_ingredients  yakes in step and ingredient id
//ingredient_quantity


const initialFormValues = {
    recipe_id:null,
    recipe_name: "",
    author: "",
    category: "",
    time: "",
    recipe_private: false,
    ingredients: "",
    steps:""
}

function RecipeForm() {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        })
      }

      const onSubmit = (e) => {
          e.preventDefault();
          axios.post("https://secret-family-recipes-be.herokuapp.com/api/recipes", formValues)
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
      }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Recipe Name: 
                    <input 
                    type = "text"
                    name = "recipe_name"
                    values = {formValues.recipe_name}
                    onChange = {handleChange}/>
                </label><br></br>
                <label>Name: 
                    <input 
                        type = "text"
                        name = "author"
                        values = {formValues.author}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Category: 
                    <input
                        type = "text"
                        name = "category"
                        values = {formValues.category}
                        onChange = {handleChange} />
                </label><br></br>
                <label>Time: 
                    <input 
                        type = "text"
                        name = "time"
                        values = {formValues.time}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Ingredients: 
                    <input 
                        type = "text"
                        name = "ingredients"
                        values = {formValues.ingredients}
                        onChange = {handleChange}/>
                </label><br></br>
                <label>Steps: 
                    <input 
                        type = "text"
                        name = "steps"
                        values = {formValues.steps}
                        onChange = {handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm
