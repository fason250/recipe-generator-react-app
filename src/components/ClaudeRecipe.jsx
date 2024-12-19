import ReactMarkdown from "react-markdown"

function ClaudeRecipe({recipe}){

    return(
        <div className="recipe">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown children={recipe}/>
          
        </div>
    )
}

export default ClaudeRecipe