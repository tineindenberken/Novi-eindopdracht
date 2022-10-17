export default function createRecipeCard(arr) {
        const recipeList = document.getElementById('main__recipe-list');
        recipeList.innerHTML = '';

        const timeIcon = new Image();
        timeIcon.src = require("../assets/time.svg");

        arr.slice(0, 6).map((item) => {

                //rounding down calories
                const roundedCalories = Math.round(item.recipe.calories);

                recipeList.innerHTML += `
                <li class="card"><a href="https://google.com">
                <img class="recipe-card__img" src="${item.recipe.image}" alt="foodimage">
                <div class="card-padding">
                <h5 class="recipe-card__label">${item.recipe.label.slice(0, 40)}</h5>
                <div class="card-content-position"><p class="recipe-card__info"><strong>${roundedCalories}</strong> Calories | <strong>${item.recipe.ingredients.length}</strong> Ingredients <span class="margin-text-card"></span><img class='time-icon' src=${timeIcon.src} alt="timeIcon"> ${item.recipe.totalTime} min.</p> </div>
                </div>
            </a></li>
        `
            }
        )
    }

