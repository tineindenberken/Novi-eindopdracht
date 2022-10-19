export const createRecipeTitel = (recipeInfo) => {
            // Variable that links the recipe titel in to HTML
            const containerRecipe = document.getElementById("inner-container__recipe-header");
            // Variable to inject the time image in the recipe titel
            const timeIcon = new Image();
            timeIcon.src = require("../assets/time.svg");
            containerRecipe.innerHTML = `
                <div class="recipe__name">
                <h2>${recipeInfo.label}</h2>
                <img class='time-icon' src=${timeIcon.src} alt="timeIcon"> ${recipeInfo.totalTime} min.
                </div>
                `
        }

export const createRecipeIngredientList = (recipeInfo) => {
            recipeInfo.ingredientLines.map((ingredient) => {
            // Variable that links the list of ingredients in to HTML, and makes for every ingriedient a list item
            const ingredientsList = document.getElementById("ingredients-info");
            ingredientsList.innerHTML = `
                <li>${ingredient}</li>
                `})
        }

export const createRecipeImage = (recipeInfo) => {
            // Variable that links the image of recipe to HTML
            const recipeImage = document.getElementById("inner-container__recipe-img");
            recipeImage.innerHTML = `
                <img class="recipe__img" src="${recipeInfo.image}" alt="image-of-recipe"/>
                `
        }

export const createNutrientsList = (recipeInfo) => {
            //Variable that links to placeholder for the nutrients info in HTML
            const nutrientsList = document.getElementById("nutrients-table")
            nutrientsList.innerHTML = `
                <table class="nutrients__table">
                <tbody>
                <tr>
                <td>Energy</td>
                <td>${Math.round(recipeInfo.totalNutrients.ENERC_KCAL.quantity)}</td>
                <td>kcal</td>
                </tr>
                <tr>
                <td>Fat</td>
                <td>${Math.round(recipeInfo.totalNutrients.FAT.quantity)}</td>
                <td>g</td>
                </tr>
                <tr>
                <td>Carbs</td>
                <td>${Math.round(recipeInfo.totalNutrients.CHOCDF.quantity)}</td>
                <td>g</td>
                </tr>
                <tr>
                <td>Sugar</td>
                <td>${Math.round(recipeInfo.totalNutrients.SUGAR.quantity)}</td>
                <td>g</td>
                </tr>
                <tr>
                <td>Protein</td>
                <td>${Math.round(recipeInfo.totalNutrients.PROCNT.quantity)}</td>
                <td>g</td>
                </tr>
                <tr>
                <td>Sodium</td>
                <td>${Math.round(recipeInfo.totalNutrients.NA.quantity)}</td>
                <td>mg</td>
                </tr>
                </tbody>
                </table>
                `
        }

export const createRecipeHealthLabels = (recipeInfo) => {
            recipeInfo.healthLabels.map((healthlabel) => {
            const healthLabels = document.getElementById("inner-container__health-labels");
            healthLabels.innerHTML += `
                <button class="recipe__healthLabels">${healthlabel}</button>
                `
            });
        }
