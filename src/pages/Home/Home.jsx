import { useEffect, useState } from "react";
import { fetchPopular } from "../../services/movie.servisec";
import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const data = await fetchPopular({
          signal: controller.signal,
        });
        setMovies((prevHome) => [...prevHome, ...data.results]);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map(({ id, title }) => (
            <li key={id}>
              {" "}
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <h2 className={css.title}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
