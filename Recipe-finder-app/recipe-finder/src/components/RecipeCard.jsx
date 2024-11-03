

const RecipeCard = ({ recipe }) => (
    <div className="recipe-card">
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        <img src={recipe.image} alt={recipe.label} className="recipe-image" />
      </a>
      <h3>{recipe.label}</h3>
      <p>Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="view-recipe-link">
        View Recipe
      </a>
    </div>
  );

  export default RecipeCard;
