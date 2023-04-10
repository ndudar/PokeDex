import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <nav>
        <NavLink to="login">Secret Stuff</NavLink>
      </nav>
    </header>
  );
}
