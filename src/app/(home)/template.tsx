import React, { ReactNode } from "react";
import Navbar from "../components/share/Navbar";
// import "../globals.css";

const HomeTemplate = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        {children}
      </main>
    </React.Fragment>
  );
};

export default HomeTemplate;
