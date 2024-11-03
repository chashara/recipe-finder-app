// src/components/RecipeSearch.jsx

import { useState } from 'react';

const RecipeSearch = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');
  const [diet, setDiet] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients, diet, mealType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingredients (e.g., chicken)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Diet</option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High-Protein</option>
        <option value="low-fat">Low-Fat</option>
        <option value="low-carb">Low-Carb</option>
      </select>
      <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        <option value="">Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default RecipeSearch;
