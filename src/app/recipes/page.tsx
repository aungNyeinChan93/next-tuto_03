/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RecipeCard from "../components/share/RecipeCard";

export const getRecipes = async () => {
  const response = await fetch(`https://dummyjson.com/recipes`);
  const { recipes } = await response.json();
  return recipes;
};

const RecipePage = async () => {
  const recipes = await getRecipes();
  return (
    <React.Fragment>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-3">
        {recipes &&
          Array.isArray(recipes) &&
          recipes?.map((recipe: any) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
      </main>
    </React.Fragment>
  );
};

export default RecipePage;
