import axios from "axios";
import {
    createRecipeTitel,
    createRecipeIngredientList,
    createRecipeImage,
    createNutrientsList,
    createRecipeHealthLabels
} from "../functions/fetchRecipePageData";


document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()

    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")

    // Declare function to fetch the data needed for the specific recipe information
    async function fetchRecipePageData() {

        // Declare input values for API
        const URI = "https://api.edamam.com";
        const ENDPOINT = "/api/recipes/v2/";
        // ID + KEY in README zetten en uitleggen waar te plaatsen
        const API_ID = "a5dd2681";
        const API_KEY = "a0155784e18c434777b77d2756991b7b";

        // Fetch data from API
        try {
            const response = await axios.get(URI + ENDPOINT + id, {
                params: {
                    type: "public",
                    app_id: API_ID,
                    app_key: API_KEY,
                    id: id
                }
            })

            // Variable that holds the needed recipe data fetched from the API
            const recipeInfo = response.data.recipe;

            // Invoke function to fetch the specific info of recipes
            createRecipeTitel(recipeInfo);
            createRecipeIngredientList(recipeInfo);
            createRecipeImage(recipeInfo);
            createNutrientsList(recipeInfo);
            createRecipeHealthLabels(recipeInfo);

        } catch (e) {
            const error = document.getElementById("error-message")
            if (e.response.status === 404) {
                error.textContent = "page not found"
            } else if (e.response.status === 500) {
                error.textContent = "internal server error"
            }
        }

    }
        // Invoke function to fetch the specific info of recipes
        fetchRecipePageData()
});