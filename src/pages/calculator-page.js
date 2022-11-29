import fetchFoodInfo from "/src/functions/fetchFoodInfo";

const submitIngredientSearch = () => {
    const searchIngredient = document.getElementById("query__calculator");
    const submitIngredientSearch = document.getElementById("searchIngredient");

    submitIngredientSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        fetchFoodInfo(searchIngredient.value)
    })
}
submitIngredientSearch()