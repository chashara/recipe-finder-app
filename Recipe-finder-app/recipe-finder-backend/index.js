import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/recipes', async (req, res) => {
  const { ingredients, diet, mealType } = req.query;

  try {
    // Construct the base URL with required parameters
    let url = `https://api.edamam.com/search?q=${ingredients}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;

    // Conditionally add optional parameters if they are present
    if (diet) {
      url += `&diet=${diet}`;
    }
    if (mealType) {
      url += `&mealType=${mealType}`;
    }

    // Fetch data from the Edamam API
    const response = await fetch(url);
    const data = await response.json();

    // Send the response data back to the client
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Log to check if environment variables are loaded correctly
console.log(process.env.EDAMAM_APP_ID, process.env.EDAMAM_APP_KEY);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
