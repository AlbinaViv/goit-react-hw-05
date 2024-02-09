import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movie.servisec";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("").then(setMovies);
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map((id) => (
            <li key={id}></li>
          ))}
        </ul>
      )}
    </div>
  );
}
