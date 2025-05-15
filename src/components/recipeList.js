export function renderRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = '';

  if (recipes.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  recipes.forEach(recipe => {
    const recipeEl = document.createElement("div");
    recipeEl.className = "recipe";
    recipeEl.innerHTML = `
      <h3>${recipe.strMeal}</h3>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      <p><strong>Category:</strong> ${recipe.strCategory}</p>
      <p><strong>Area:</strong> ${recipe.strArea}</p>
      <p>${recipe.strInstructions.substring(0, 200)}...</p>
    `;
    container.appendChild(recipeEl);
  });
}