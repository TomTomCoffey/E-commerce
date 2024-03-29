import Link from "next/link";
import React from "react";
import Flyout from "./Flyout";

const Nav = () => {
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/products"> Products</Link>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/purchases"> Purchases</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <Link href="/products"> Products</Link>
          </li>
          <li>
            <details>
              <summary>Vendors</summary>
              <ul className="p-2">
                <li>
                  <Link href="/vendors/local">Local</Link>
                </li>
                <li>
                  <Link href="/vendors/global">Global</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/purchases"> Purchases</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn btn-accent">
          Login
        </Link>
        <span></span>
        <Link href="/sign" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
      {/* <Flyout /> */}
    </div>
  );
};

export default Nav;
