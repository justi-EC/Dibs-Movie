import axios from "axios";
const MOVIE_API_KEY = "d91258d3e6acc08cc4747ef8defa73c0";
const MOVIE_BASE_FETCH = "https://api.themoviedb.org/3";

export const getTrendingContents = async () => {
  const response = await axios.get(
    `${MOVIE_BASE_FETCH}/trending/movie/week?api_key=${MOVIE_API_KEY}`
  );
  return response.data;
};
