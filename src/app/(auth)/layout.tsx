import Link from "next/link";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <section className="">
        <ul className="flex justify-start gap-6 items-center p-4 bg-green-400 text-black mt-1 rounded">
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
        {children}
      </section>
    </React.Fragment>
  );
};

export default AuthLayout;
