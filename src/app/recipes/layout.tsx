import React, { ReactNode } from "react";
import Navbar from "../components/share/Navbar";
import ErrorWrapper from "../components/share/ErrorWrapper";

interface RecipesLayoutProps {
  children: ReactNode;
  recipe: ReactNode;
}

const RecipesLayout: React.FC<RecipesLayoutProps> = async ({
  children,
  recipe,
}) => {
  return (
    <React.Fragment>
      <ErrorWrapper>
        <main className="">
          <Navbar />
          <div className={`${recipe && "opacity-90"}`}>{children}</div>
          <div className=" z-100 fixed top-50  right-140">{recipe}</div>
        </main>
      </ErrorWrapper>
    </React.Fragment>
  );
};

export default RecipesLayout;
