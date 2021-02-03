import React from 'react'

function RecipeCard(props) {
    return (
        <div>
            {props.recipe.author}<br></br>
            {props.recipe.recipe_name}<br></br>
            {props.recipe.category}<br></br>
            {props.recipe.ingredients}<br></br>
            {props.recipe.steps}<br></br>
            {props.recipe.time}<br></br><br></br>
            <button onclick = {()=>{}}>Edit</button>
            <button onClick = {()=> {}}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default RecipeCard
