// src/components/RecipeList.jsx

import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list"> {/* Apply the recipe-list class here for grid layout */}
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
