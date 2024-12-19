import { HfInference } from "@huggingface/inference"

const  SYSTEM_PROMPT = `you are an assistant that receives a list of ingredients that a user has and asuggests a recipe they could make with some or all of these ingredients. you don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)


export async function getRecipeFromMistral(ingredientsArray){
    const ingredientsString = ingredientsArray.join(", ")
    try{
        const response = await hf.chatCompletion({
            model:"mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role:"system",content: SYSTEM_PROMPT},
                {role:"user",content:`I have ${ingredientsString}. Please give me a recipe you'd recommend i make!`}
            ],
            max_token: 1024,
        })
        return response.choices[0].message.content
    }catch(error){
        console.error(error.message)
    }
}