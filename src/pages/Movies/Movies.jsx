import { useEffect, useState } from "react";
import css from "./Movies.module.css";
import toast, { Toaster } from "react-hot-toast";
import { searchMovie } from "../../services/movie.servisec";
import { Link, useLocation } from "react-router-dom";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const notify = () => toast.error("Please, enter key word!");
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const dataResults = await searchMovie(search);
      setMovies(dataResults);
    }
    fetchData();
  }, [search]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.query.value);
    // console.log(e.target.elements.query.value);
    // console.log(movies);

    if (!search) {
      notify();
    }
    e.target.reset();
  };
  return (
    <>
      <Toaster />
      <form
        className={css.form}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          autoComplete="off"
          name="query"
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul className={css.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <h2 className={css.title}>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
