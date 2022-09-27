import fetchRecipeData from "./functions/fetchRecipeData";

const submitForm = document.getElementById( "onSubmit");

submitForm.addEventListener('submit', ( event) => {
    event.preventDefault();
    fetchRecipeData( "pasta")
} );


