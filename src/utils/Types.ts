interface IGenres {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  logo_path: string;
  name: string;
}
export interface TrendingContentType {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  genres: IGenres[];
  overview: string;
  release_date: string;
  runtime: number;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  production_companies: ICompany[];
}

export interface DetailContentType {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  status: string;
  budget: number;
  revenue: number;
  homepage: string;
  imdb_id: string;
  release_date: string;
}

export interface IGetContentsResult {
  page: number;
  results: TrendingContentType[];
  total_pages: number;
  total_results: number;
}
export interface IVideos {
  id: string;
  key: string;
  name: string;
  site: "YouTube";
  size: string;
  type: string;
  official: boolean;
}
export interface IGetVideos {
  id: number;
  results: IVideos[];
}

export interface UserDataType {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

export interface DibsContentStateType {
  isPending: boolean;
  success: boolean;
  error: string | null;
}
export interface StatusColorType {
  color?: "orange" | "teal" | "blue" | "purple" | "green" | "red";
}

export interface ISearchResultList {
  results: ISearchResult[];
  total_results: number;
  total_pages: number;
}

interface ISearchResult {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
