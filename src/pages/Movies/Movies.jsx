import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.gat(
          "https://api.themoviedb.org/3/account/20977666"
        );
        setMovies(response.data);
      } catch (error) {}
    }
    FetchData();
  }, []);

  // useEffect(() => {
  //   const url = "https://api.themoviedb.org/3/account/20977666";

  //   const options = {
  //     headers: {
  //       Authorization: "Bearer a138309b07f4565abd84a04ed7875785",
  //     },
  //   };

  //   axios
  //     .get(url, options)
  //     .then((response) => setMovies(response.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map((movies) => (
            <li key={movies.id}>{movies.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// export default function Movies() {
//   const [movies, setMovies] = useState([]);

//
//     const url = "<https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1>";

//     const options = {
//       headers: {
//         Authorization: "Bearer 954d1df3195be85d0edb2f306ee16292",
//       },
//     };

//     axios
//       .get(url, options)
//       .then((response) => setMovies(response))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Movies</h2>
//       {movies.length > 0 && (
//         <ul>
//           {movies.map((movies) => (
//             <li key={movies.id}></li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
