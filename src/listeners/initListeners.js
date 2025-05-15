import { loadRecipe } from '../handlers/loadRecipe.js';

export function initListeners() {
  const input = document.getElementById("recipe-search");
  
  input.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();
    if (searchTerm.length > 2) {
      loadRecipe(searchTerm);
    }
  });
}