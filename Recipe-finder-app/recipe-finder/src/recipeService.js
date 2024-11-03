export const fetchRecipes = async (ingredients, diet, mealType) => {
    const response = await fetch(`/api/recipes?ingredients=${ingredients}&diet=${diet}&mealType=${mealType}`);
    const data = await response.json();
    return data;
  };
