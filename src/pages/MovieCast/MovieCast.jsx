import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/movie.servisec";
import { useEffect, useState } from "react";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMovieCast = await getMovieCast(movieId);
        setCast(fetchMovieCast);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [movieId]);
  console.log(cast);
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            width="90"
          />
        </li>
      ))}{" "}
      {/* доробити розмітку */}
    </ul>
  );
}
