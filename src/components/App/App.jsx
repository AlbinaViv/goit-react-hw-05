import { Route, Routes } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import NotFound from "../../pages/NotFound/NotFound";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "../../pages/MovieReviews/MovieReviews";
import MovieCast from "../../pages/MovieCast/MovieCast";

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/movies"
            element={<Movies />}
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
