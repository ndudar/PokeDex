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
import PokemonDetail, { loader as pokemonDetailLoader } from "./pages/Pokemon/PokemonDetail";
import PokemonEvolution from "./pages/Pokemon/PokemonEvolution";
import PokemonMoves from "./pages/Pokemon/PokemonMoves";
import PokemonStats from "./pages/Pokemon/PokemonStats";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="pokemon" element={<Pokemon />} loader={pokemonLoader} />
      <Route path="pokemon/:id" element={<PokemonDetail />} loader={pokemonDetailLoader}>
        <Route path="evolution" element={<PokemonEvolution/>} />
        <Route path="moves" element={<PokemonMoves/>} />
        <Route path="stats" element={<PokemonStats/>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
