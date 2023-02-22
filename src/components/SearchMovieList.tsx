import { IGetContentsResult } from "../utils/Types";
import styled from "styled-components";
import SearchContent from "./styled/SearchContent";
import { H2 } from "../pages/Login";

interface Props {
  searchMovies: IGetContentsResult;
}

const SearchMovieList = ({ searchMovies }: Props) => {
  return searchMovies.results.length ? (
    <>
      {searchMovies.results.map((content) => (
        <SearchContent key={content.id} content={content} />
      ))}
    </>
  ) : (
    <NotFoundMessage>찾을 영화가 없습니다.</NotFoundMessage>
  );
};

export default SearchMovieList;

const NotFoundMessage = styled(H2)`
  margin-top: 14rem;
`;
