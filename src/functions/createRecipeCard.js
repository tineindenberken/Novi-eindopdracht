export default function createRecipeCard(arr) {

    const recipeList = document.getElementById('recipe-card-list');
    recipeList.innerHTML = "";
    arr.map((item) => {
        recipeList.innerHTML += `
                <li class="individual-card">
                <img class="recipe-image" src="${item.recipe.image}" alt="${item.recipe.label}" />
                <h3>${item.recipe.label} </h3>
                <p>${item.recipe.calories} Calories | ${item.recipe.ingredients.length} Ingriedients</p>
            </article>
            </li>
            `

    })
}

 /////////////////// GEBLEVEN BIJ LES 17 -- 30 MIN
