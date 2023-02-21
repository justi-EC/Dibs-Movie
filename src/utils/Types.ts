export interface IContent {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title?: string;
  name?: string;
  overview: string;
  origin_country?: string[];
}

export interface IGetContentsResult {
  page: number;
  results: IContent[];
  total_pages: number;
  total_results: number;
}
