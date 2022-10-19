// Declare function to create recipe card for the header
export default function createRecipeCardHeader(arr) {

    // Variable to link to the list in which the recipe card must be injected
    const recipeListHeader = document.getElementById("random-recipe-container")
    recipeListHeader.innerHTML = ""

    // Variable to inject the time image in the recipe card
    const timeIcon = new Image();
    timeIcon.src = require("../assets/time.svg");

    // Make sure you will see 3 random recipes
    arr.slice(0, 3).map((item) => {

        // Variable to make sure that you will send to the recipe you click on
        const recipeUri = item.recipe.uri
        const recipeId = recipeUri.split("_")[1]

        // Rounding down calories
        const roundedCalories = Math.round(item.recipe.calories);

        // Create the 3 recipe cards with the correct info using the data from API
        recipeListHeader.innerHTML += `
                <div class="recipe-card"><a href="pages/recipe-page.html?id=${recipeId}">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="recipe-card__text">
                <h5 class="recipe-card__label">${item.recipe.label.slice(0, 35)}</h5>
                <div class="card-content-position">
                <p class="recipe-card__info">
                <strong>${roundedCalories}</strong> Calories | 
                <strong>${item.recipe.ingredients.length}</strong> Ingredients 
                <span class="margin-text-card"></span>
                <img class='time-icon' src=${timeIcon.src} alt="timeIcon"> ${item.recipe.totalTime} min.</p>
                </div>
                </div>
                </a></div> 
        `
    })
}