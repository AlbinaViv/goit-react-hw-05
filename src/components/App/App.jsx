// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import { NavBar } from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";

export const App = () => {
  return (
    <div>
      <NavBar />

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
