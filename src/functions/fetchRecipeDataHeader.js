import axios from "axios";
// Make sure the recipe cards (header) function can be import
import createRecipeCardHeader from "./createRecipeCardHeader";

// Declare function to create three recipe cards with random recipes to show in the header
export default async function fetchRecipeDataHeader(ingredient) {

    // Declare input values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2"
    // ID + KEY in README zetten en uitleggen waar te plaatsen
    const API_ID = "a5dd2681"
    const API_KEY = "a0155784e18c434777b77d2756991b7b"

    //Fetch data from API
    try {
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: ingredient,
                random: true
            }
        })

        // Variable to hold the array of needed data fetched from the API
        const arrayOfRecipes = response.data.hits

        // Cutting the array of so only three recipes will show in the header
        arrayOfRecipes.slice(0, 2)

        // Function to create a recipe card for the header
        createRecipeCardHeader(arrayOfRecipes)

        // Catch error message and show them in the UI
    } catch (e) {
        const error = document.getElementById("error-message")
        if (e.response.status === 404) {
            error.textContent = "page not found"
        } else if (e.response.status === 500) {
            error.textContent = "internal server error"
        }
    }
}