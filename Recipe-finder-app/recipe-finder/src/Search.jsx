// src/pages/Search.jsx

import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import { useState } from 'react';
import { fetchRecipes } from '../services/recipeService';

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (ingredients, diet, mealType) => {
    setLoading(true);
    const data = await fetchRecipes(ingredients, diet, mealType);
    setRecipes(data.hits);
    setLoading(false);
  };

  return (
    <div className="search-page">
      <h1>Search for Recipes</h1>
      <RecipeSearch onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {/* No need to apply recipe-list class here if not used in App */}
      <div>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;
