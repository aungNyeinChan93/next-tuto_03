"use client";
import React, { ReactNode, useState } from "react";

interface DashboardProps {
  children: ReactNode;
  notification: ReactNode;
  mail: ReactNode;
  login: ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({
  children,
  notification,
  mail,
  login,
}) => {
  const [auth, setAuth] = useState(true);

  if (auth) {
    return (
      <>
        <div>{login}</div>
        <button type="button" onClick={() => setAuth((prev) => !prev)}>
          Change Auth
        </button>
      </>
    );
  }

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
