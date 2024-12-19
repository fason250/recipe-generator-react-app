 
function IngredientList(props){
    const { ingredients,getRecipe } = props
    const ingredientsItems = ingredients.map(ingredient=>( <li  key={ingredient}>{ingredient}</li>))

    return(

        <div className="ingredient-list">
            <h1>Ingredients on hand:</h1>
            <ul>
               { ingredientsItems }
            </ul>
            <div className="ready-recipe">
                <div className="text">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe} className="generate">Get a recipe</button>
     
            </div>
        </div>
    )
}

export default IngredientList