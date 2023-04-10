import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//components and pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pokemon, { loader as pokemonLoader } from "./pages/Pokemon/Pokemon";
import PokemonDetail from "./pages/Pokemon/PokemonDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="pokemon" element={<Pokemon />} loader={pokemonLoader} />
      <Route path="pokemon/:id" element={<PokemonDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
