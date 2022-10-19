// Make sure the recipe data function can be import
import fetchRecipeData from "./functions/fetchRecipeData";
import fetchRecipeDataHeader from "./functions/fetchRecipeDataHeader";

// Function to create three recipe cards with random recipes to show in the header
fetchRecipeDataHeader("salt")

// Variable that links to the input fields in the search form in HTML
const ingriedients = document.getElementById("ingriedients-field");
const mealType = document.getElementById("meal-type-field");
const cuisineType = document.getElementById("cuisine-type-field");
const dietLabels = document.getElementById("diet-labels");
const time = document.getElementById("time-field");

// Variable that links to the recipe search form in HTML
const submitForm = document.getElementById( "onSubmit");

// Function to fetch data from the Edamam API which will run after the user clicked on enter or search button
submitForm.addEventListener('submit', ( event) => {
    // Prevent form from auto-submitting
    event.preventDefault();
    // Execute function to fetch data and parse out values as arguments
    fetchRecipeData(
        ingriedients.value,
        mealType.value,
        cuisineType.value,
        dietLabels.value,
        time.value
    )
} );

