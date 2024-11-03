// src/services/recipeService.js

export const fetchRecipes = async (ingredients, diet, mealType) => {
    try {
      const response = await fetch(`/api/recipes?ingredients=${ingredients}&diet=${diet}&mealType=${mealType}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
