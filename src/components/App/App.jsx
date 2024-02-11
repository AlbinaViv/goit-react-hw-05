// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import css from "./App.module.css";
import { NavBar } from "../NavBar/NavBar";
import NotFound from "../../pages/NotFound/NotFound";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchPopular } from "../../services/movie.servisec";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "../../pages/MovieReviews/MovieReviews";
import MovieCast from "../../pages/MovieCast/MovieCast";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const data = await fetchPopular({
          abortControler: controller,
        });
        setMovies(data.results);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  const handleSubmit = () => {
    if (!search) {
      return;
    }
    setSearch(search);

    // trim() прибирає зайві пробіли
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        >
          <Route
            index
            element={<Home movies={movies} />}
          />
          <Route
            path="/movies"
            element={<Movies handleSubmit={handleSubmit} />}
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route
              path="/movies/:movieId/reviews"
              element={<MovieReviews />}
            />
            <Route
              path="/movies/:movieId/cast"
              element={<MovieCast />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
