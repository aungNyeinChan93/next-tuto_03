import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <section>
        Admin Navbar .... lorem12
        {children}
      </section>
    </React.Fragment>
  );
};

export default UserLayout;
