import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';
import serverless from 'serverless-http';

const app = express();

app.get('/recipes', async (req, res) => {
  const { ingredients, diet, mealType } = req.query;

  try {
    let url = `https://api.edamam.com/search?q=${ingredients}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;

    if (diet) url += `&diet=${diet}`;
    if (mealType) url += `&mealType=${mealType}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

module.exports.handler = serverless(app);
