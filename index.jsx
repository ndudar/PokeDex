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
import Login, { loader as loginLoader } from "./pages/Login";
import Pokemon, { loader as pokemonLoader } from "./pages/Pokemon/Pokemon";
import PokemonDetail, {
  loader as pokemonDetailLoader,
} from "./pages/Pokemon/PokemonDetail";
import PokemonEvolution from "./pages/Pokemon/PokemonEvolution";
import PokemonMoves from "./pages/Pokemon/PokemonMoves";
import PokemonStats from "./pages/Pokemon/PokemonStats";
import SecretHome from "./pages/Secrets/SecretHome";

//protected route
import { requireAuth } from "./utils";

//sad path
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login"
      element={<Login />}
      loader={loginLoader}
      />
      <Route
        path="pokemon"
        element={<Pokemon />}
        loader={pokemonLoader}
        errorElement={<Error />}
      />
      <Route
        path="pokemon/:id"
        element={<PokemonDetail />}
        loader={pokemonDetailLoader}
        errorElement={<Error />}
      >
        <Route
          path="evolution"
          element={<PokemonEvolution />}
          errorElement={<Error />}
        />
        <Route
          path="moves"
          element={<PokemonMoves />}
          errorElement={<Error />}
        />
        <Route
          path="stats"
          element={<PokemonStats />}
          errorElement={<Error />}
        />
      </Route>
      <Route path="secrets"
      element={<SecretHome />}
      errorElement={<Error />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
