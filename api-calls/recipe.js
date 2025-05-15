export async function fetchRecipes(recipeName) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
  const data = await response.json();
  return data.meals || [];
}