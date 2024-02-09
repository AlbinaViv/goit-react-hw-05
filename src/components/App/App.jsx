// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
// import { Home } from "../Home/Home";
// import { Movies } from "../Movies/Movies";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export const App = () => {
  return (
    <div>
      <h1>The forst page</h1>
      <nav className={css.nav}>
        <Link
          to="/"
          className={css.link}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={css.link}
        >
          Movies
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
