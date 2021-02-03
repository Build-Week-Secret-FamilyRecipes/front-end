import React, {useState} from 'react'

const initialRecipe = {
    recipe_name: "",
    author: "",
    category: "",
    time: "",
    ingredients: "",
    steps:""
}
function RecipeCard(props) {
    const [editing, setEditing] = useState(false);
    const [rcipeToEdit, setRecipeToEdit] = useState(initialRecipe)
    return (
        <div>
            {props.recipe.author}<br></br>
            {props.recipe.recipe_name}<br></br>
            {props.recipe.category}<br></br>
            {props.recipe.ingredients}<br></br>
            {props.recipe.steps}<br></br>
            {props.recipe.time}<br></br><br></br>
            <button onclick = {()=>{}}>Edit</button>
            <button onClick = {()=> {return <form><input></input></form>}}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default RecipeCard
