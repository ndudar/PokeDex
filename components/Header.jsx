import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  //styling when link is active
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link to="/" className="site-logo">PokeDex</Link>
      <nav>
        <NavLink to="pokemon" style={({isActive}) => isActive ? activeStyles : null}>Pokemon</NavLink>
        <NavLink to="login" style={({isActive}) => isActive ? activeStyles : null}>Secret Stuff</NavLink>
      </nav>
    </header>
  );
}
