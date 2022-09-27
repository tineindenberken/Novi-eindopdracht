export default function createRecipeCard ( arr ) {

    const recipeList = document.getElementById('recipe-card-list');
    arr.map((item) => {
        recipeList.innerHTML += `
            <li> ${item.recipe.label} </li>
            `
    })
}