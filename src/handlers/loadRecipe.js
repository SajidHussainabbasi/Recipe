import { fetchRecipes } from '../../api-calls/recipe.js';
import { renderRecipes } from '../components/recipeList.js';

export async function loadRecipe(recipeName) {
  const recipes = await fetchRecipes(recipeName);
  renderRecipes(recipes);
}