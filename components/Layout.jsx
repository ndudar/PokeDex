import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <h1>We're in the Layout!</h1>
      </main>
      <Footer />
    </div>
  );
}
