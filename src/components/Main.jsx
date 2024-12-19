import { useState } from "react"

import IngredientList from "./IngredientList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

function Main(){
    
    const [ingredients,setIngredients] = useState([])
    const [recipe,setRecipe ] = useState("")


    function handleSubmit(e){
        
        e.preventDefault()
        const formEl = e.currentTarget
        const formData = new FormData(formEl)
        const ingredient = formData.get("ingredient")
        if(ingredient.length > 0) setIngredients((i)=>[...i,ingredient])
        formEl.reset()
    }
    
    async function getRecipe(){
        const  generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    return(
        <div className="main">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type="text" id="ingredient-input"  placeholder="e.g oregano"  name="ingredient"/>
                <button className="add">+ Add ingredient</button>
            </form>
            {ingredients.length > 0 &&  <IngredientList ingredients={ingredients} getRecipe={getRecipe}/>}
           
           {recipe && <ClaudeRecipe recipe={recipe} />}
        </div>
    )
}

export default Main