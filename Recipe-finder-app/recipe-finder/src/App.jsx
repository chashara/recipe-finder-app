// src/App.jsx

import { useState } from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './services/recipeService';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (ingredients, diet, mealType) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRecipes(ingredients, diet, mealType);
      setRecipes(data.hits);
    } catch (error) {
      setError('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="home-container">
        <h1 className="centered-title">Recipe Finder</h1>
        <p className="slogan">"Discover recipes based on ingredients you have"</p>
        <RecipeSearch onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
