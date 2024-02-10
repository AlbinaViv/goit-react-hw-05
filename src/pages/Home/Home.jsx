import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";

export default function Home({ movies }) {
  const location = useLocation();

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && (
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
      )}
    </div>
  );
}
