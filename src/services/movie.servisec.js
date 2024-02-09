import axios from "axios";

// const API_KEY = "a138309b07f4565abd84a04ed7875785";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// export const fetchMovies = async () => {
//   const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
//   return data.results;
// };

const url =
  "<https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1>";

const options = {
  headers: {
    // Замість my_unique_api_key вставте свій ключ
    Authorization: "Bearer a138309b07f4565abd84a04ed7875785",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const fetchImages = async (url, options) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      client_id: ACCESS_KEY,
      url: "",
      options: "",
      lang: "en",
      per_page: "1",
    },
  });
  return data;
};
