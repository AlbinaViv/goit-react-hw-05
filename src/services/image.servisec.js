import axios from "axios";

const ACCESS_KEY = "954d1df3195be85d0edb2f306ee16292";

axios.defaults.baseURL = "https://api.unsplash.com/";

console.log(data);

// export const fetchImages = async (query, page) => {
//   const { data } = await axios.get(`/search/photos`, {
//     params: {
//       client_id: ACCESS_KEY,
//       query,
//       page,
//       lang: "en",
//       per_page: "15",
//       orientation: "portrait",
//     },
//   });
//   return data;
// };
