import React from "react";
import { Outlet } from "react-router-dom";

//components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
