import React, { ReactNode } from "react";

interface CommentLayoutProps {
  children: Readonly<ReactNode>;
}

const CommentLayout: React.FC<CommentLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <section className="flex justify-center items-center w-full min-h-screen bg-green-400">
        {children}
      </section>
    </React.Fragment>
  );
};

export default CommentLayout;
