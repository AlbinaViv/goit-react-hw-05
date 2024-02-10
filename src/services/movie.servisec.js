import axios from "axios";

const API_KEY = "a138309b07f4565abd84a04ed7875785";

export const fetchPopular = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    alert("Oops, something's wrong!");
  }
};
