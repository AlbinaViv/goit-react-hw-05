import { TiArrowBack } from "react-icons/ti";
import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { getMovieDetailsPage } from "../../services/movie.servisec";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMovieDetailsPage = await getMovieDetailsPage(movieId);
        setMovies(fetchMovieDetailsPage);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link to={`/`}>
        <TiArrowBack
          className={css.myIcon}
          size="24"
        />
        Go back
      </Link>
      {movies && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.title}
            width="200"
          />
          <h2>
            {movies.title} {movies.release_date}
          </h2>
          <p>
            User Score: {`${Math.round((movies.vote_average / 10) * 100)}%`}
          </p>
          <p>Overview {movies.overview}</p>
          <p>Genres: {movies.genres.map(({ name }) => name).join(", ")}</p>
          <Outlet />
        </div>
      )}
    </>
  );
}
