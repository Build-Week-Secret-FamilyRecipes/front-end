import React, {useEffect, useState} from 'react'
import axios from "axios"
import RecipeCard from "./RecipeCard"

export default function ListOfRecipies() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        axios.get('https://secret-family-recipes-be.herokuapp.com/api/recipes')
        .then(res => {
            console.log(res)
            setRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            {recipes.map(recipe => {
                return <RecipeCard key={recipe.id} recipe = {recipe}/>
            })}
        </div>
    )
}
