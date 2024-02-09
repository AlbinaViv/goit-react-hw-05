import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   async function FetchData() {
  //     try {
  //       const response = await axios.gat("http://localhost:5173/movies");
  //       setMovies(response.data);
  //     } catch (error) {}
  //   }
  //   FetchData();
  //   const url = "https://api.themoviedb.org/3/";

  //   // const ACCESS_KEY = "954d1df3195be85d0edb2f306ee16292";

  //   const options = {
  //     headers: {
  //       Authorization: "Bearer 954d1df3195be85d0edb2f306ee16292",
  //     },
  //   };

  //   axios
  //     .get(url, options)
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      {/* <h2>Movies</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map((movies) => (
            <li key={movies.id}></li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
