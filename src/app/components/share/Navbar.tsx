import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <React.Fragment>
      <header>
        <nav className="bg-slate-800 text-white my-2  rounded flex justify-between items-center">
          <h3 className="ms-10">Logo</h3>
          <ul className="flex justify-end items-center space-x-2 gap-6 mx-10 py-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
