import axios from 'axios';
import { setCookie } from './cookie';

const { VITE_MOVIES_API_KEY } = import.meta.env;
const MOVIE_API_KEY = VITE_MOVIES_API_KEY;
const MOVIE_BASE_FETCH = 'https://api.themoviedb.org/3';

export interface Endpoints {
  trending: string;
  upcoming: string;
  toprated: string;
}

export const getMovies = async (type: keyof Endpoints) => {
  const endpoints: Endpoints = {
    trending: '/trending/movie/week',
    upcoming: '/movie/upcoming',
    toprated: '/movie/top_rated',
  };
  const endpoint = endpoints[type];
  const url = `${MOVIE_BASE_FETCH}${endpoint}?api_key=${MOVIE_API_KEY}`;
  const response = await axios.get(url);

  return response.data;
};

export const getDetailContents = async (movieId: string) => {
  const response = await axios.get(
    `${MOVIE_BASE_FETCH}/movie/${movieId}?api_key=${MOVIE_API_KEY}`,
  );
  return response.data;
};

export const getSearchMovies = async (query: string, page: number) => {
  const response = await axios.get(`${MOVIE_BASE_FETCH}/search/movie`, {
    params: {
      api_key: MOVIE_API_KEY,
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const getContentVideos = async (contentId: number) => {
  const contentVideo = fetch(
    `${MOVIE_BASE_FETCH}/movie/${contentId}/videos?api_key=${MOVIE_API_KEY}`,
  ).then((response) => response.json());
  if (contentVideo as any) {
    setCookie('safeCookie1', 'foo', {
      path: '/',
      secure: true,
      sameSite: 'None',
    });
  }
  return contentVideo;
};
