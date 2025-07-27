import React from "react";
import { getRecipe } from "../../[recipeId]/page";
import RecipeCard from "@/app/components/share/RecipeCard";

interface InterceptRecipeProps {
  params: Promise<{
    recipeId: string | number;
  }>;
}

const InterceptRecipe: React.FC<InterceptRecipeProps> = async ({ params }) => {
  const { recipeId } = await params;
  const recipe = recipeId && (await getRecipe(recipeId));
  return (
    <React.Fragment>
      <main className="w-full">{recipe && <RecipeCard {...recipe} />}</main>
    </React.Fragment>
  );
};

export default InterceptRecipe;
