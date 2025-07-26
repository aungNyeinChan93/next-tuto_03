import { Metadata } from "next";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const metaData: Metadata = {
  title: "admin ",
};

const UserLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <div>
        Admin Navbar .... lorem12 that is template file
        {children}
      </div>
    </React.Fragment>
  );
};

export default UserLayout;
