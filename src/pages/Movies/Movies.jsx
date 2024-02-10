import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {}
// const [movies, setMovies] = useState([]);
// const [searchs, setSearchs] = useState([]);

// const searchFilms = async (query) => {
//   setQuery(query.value);
// };

// useEffect(() => {
//   async function FetchData() {
//     try {
//       const data = await fetchTrending(movies);
//       setSearchs(data.results);
//     } catch (error) {
//       // console.error("This didn't work.");
//       // throw error;
//     }
//   }
//   FetchData();
// }, [movies]);

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

//   return (
//     <div>
//       <h2>Movies</h2>
//       {searchs.length > 0 && (
//         <ul>
//           {searchs.map(({ id, title }) => (
//             <li key={id}>{title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// // export default function Movies() {
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
