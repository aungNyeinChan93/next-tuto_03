"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { ReactNode } from "react";
import "../globals.css";

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <html>
        <body className="mx-10 px-10">
          <ul className="flex justify-start gap-6 items-center p-4 bg-green-400 text-black mt-1 rounded">
            <li>
              <Link
                href="/register"
                className={
                  pathname == "/register" ? "text-red-600 font-semibold" : ""
                }
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`${
                  pathname === "/login" && "text-red-600 font-semibold"
                } `}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/forget-password"
                className={`${
                  pathname === "/forget-password" &&
                  "text-red-600 font-semibold"
                }`}
              >
                Forget Password
              </Link>
            </li>
          </ul>
          {children}
        </body>
      </html>
    </React.Fragment>
  );
};

export default AuthLayout;
