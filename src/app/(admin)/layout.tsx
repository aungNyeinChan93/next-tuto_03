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
      <html>
        <body>
          Admin Navbar .... lorem12
          {children}
        </body>
      </html>
    </React.Fragment>
  );
};

export default UserLayout;
