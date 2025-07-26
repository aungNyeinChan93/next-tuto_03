import React, { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
  notification: ReactNode;
  mail: ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = async ({
  children,
  notification,
  mail,
}) => {
  return (
    <React.Fragment>
      <p>Dashboard Layout</p>
      <main>
        {children}
        <hr />
        <hr />
        <div className=" flex  w-full min-h-screen bg-slate-100  ">
          {/* slots */}
          <div className="flex-1">{notification}</div>
          <div className="flex-1">{mail}</div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DashboardLayout;
