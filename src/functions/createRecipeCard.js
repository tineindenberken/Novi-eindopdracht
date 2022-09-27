export default function createRecipeCard ( arr ) {

    const recipeList = document.getElementById('recipe-card-list');
    arr.map((item) => {
        recipeList.innerHTML += `
            <li> 
                <h3>${item.recipe.label} </h3>
                <img src="${item.recipe.image }" alt="${ item.recipe.label }" />
            </li>
            `
    })
}