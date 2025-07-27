/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const RecipeCard = ({ image, id }: { image: string; id: number | string }) => {
  return (
    <React.Fragment>
      <Link href={`/recipes/${id}`} className="block w-full">
        <img
          alt="123"
          src={image}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
      </Link>
    </React.Fragment>
  );
};

export default RecipeCard;
