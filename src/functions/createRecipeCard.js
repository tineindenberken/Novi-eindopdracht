// Declare function to create a recipe card
export default function createRecipeCard(arr) {

        // Variable to link to the list in which the recipe card must be injected
        const recipeList = document.getElementById('main__recipe-list');
        recipeList.innerHTML = '';

        // Variable to inject the time image in the recipe card
        const timeIcon = new Image();
        timeIcon.src = require("../assets/time.svg");

        // Make sure you will see 18 recipes with your chosen values
        arr.slice(0, 18).map((item) => {

                // Variable to make sure that you will send to the recipe you click on
                const recipeUri = item.recipe.uri
                const recipeId = recipeUri.split("_")[1]

                // Rounding down calories
                const roundedCalories = Math.round(item.recipe.calories);

                // Create the recipe card with the correct info using the data from API
                recipeList.innerHTML += `
                <div class="recipe-card"><a href="pages/recipe-page.html?id=${recipeId}">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="recipe-card__text">
                <h5 class="recipe-card__label">${item.recipe.label.slice(0, 40)}</h5>
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
            }
        )
    }

