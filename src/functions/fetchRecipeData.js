import axios from "axios";
import createRecipeCard from "./createRecipeCard";


// Fetching data from Edamam API
export default async function fetchRecipeData( searchQuery ) {

    // Declare input value for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2"
    // ID + KEY in README zetten en uitleggen waar te plaatsen
    const API_ID = "a5dd2681"
    const API_KEY = "a0155784e18c434777b77d2756991b7b"

    // If succesfull then .....
    try {
        // Fetch data from API
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery
            }
        } )

        // Store recipe key in variale
        const arrayOfRecipes = response.data.hits
        console.log( arrayOfRecipes );
        // Deze moet er straks uit ^^

        createRecipeCard( arrayOfRecipes);

        // Catch error message and show them in UI
    } catch ( e ) {
        const error = document.getElementById('error-message')
        if ( e.response.status === 404 ) {
            error.innerContent = 'Page not found'
        } else if ( e.response.status === 500 ) {
            error.innerContent = 'Internal server error'
        }
    }
}
