import fetchRecipeData from "./functions/fetchRecipeData";


// Reference to input fields
const ingriedients = document.getElementById("ingriedients-field");
const mealType = document.getElementById("meal-type-field");
const cuisineType = document.getElementById("cuisine-type-field");
const dietLabels = document.getElementById("diet-labels");
const time = document.getElementById("time-field");

// Reference to form submit
const submitForm = document.getElementById( "onSubmit");

// Send form with data
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


