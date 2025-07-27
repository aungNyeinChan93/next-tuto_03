"use client";

import React from "react";

const RecipeError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <html>
        <body className="w-full h-screen flex justify-center items-center">
          {error && error?.message}
        </body>
      </html>
    </React.Fragment>
  );
};

export default RecipeError;
