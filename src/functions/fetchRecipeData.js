import axios from "axios";
// Make sure the recipe card function can be import
import createRecipeCard from "./createRecipeCard";

// Fetching data from Edamam API
export default async function fetchRecipeData(searchQuery, mealType, cuisineType, dietLabels, time) {

    // Declare input value for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2"
    // ID + KEY in README zetten en uitleggen waar te plaatsen
    const API_ID = "a5dd2681"
    const API_KEY = "a0155784e18c434777b77d2756991b7b"

    // Fetch data from API
    try {
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery,
                random: true,
                mealType: mealType || null,
                cuisineType: cuisineType || null,
                dietLabels: dietLabels || null,
                time: time || null,
            }
        })

        // Variable to hold the needed data fetched from the API
        const arrayOfRecipes = response.data.hits
        // console.log(arrayOfRecipes); // moet er nog uit

        // Function to create a recipe card
        createRecipeCard(arrayOfRecipes);

        // Catch error message and show them in UI
    } catch (e) {
        const error = document.getElementById('error-message')
        if (e.response.status === 404) {
            error.innerContent = 'Page not found'
        } else if (e.response.status === 500) {
            error.innerContent = 'Internal server error'
        }
    }
}
