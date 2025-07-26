import React, { ReactNode } from "react";
import Navbar from "../components/share/Navbar";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <section>
        <Navbar />
        {children}
      </section>
    </React.Fragment>
  );
};

export default UserLayout;
