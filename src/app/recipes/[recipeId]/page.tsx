import RecipeCard from "@/app/components/share/RecipeCard";
import React from "react";

interface DetailRecipeProops {
  params: Promise<{
    recipeId: string;
  }>;
}

export const getRecipe = async (id: number | string) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();
  return recipe;
};

const DetailRecipe: React.FC<DetailRecipeProops> = async ({ params }) => {
  const { recipeId } = await params;
  const recipe = recipeId && (await getRecipe(recipeId));
  return (
    <React.Fragment>
      <main className="flex justify-center items-center w-full h-screen">
        <div>
          <div className="text-2xl font-mono font-semibold text-green-400 text-center p-4">
            {recipe.name}
          </div>
          <RecipeCard {...recipe} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default DetailRecipe;
