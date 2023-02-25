import styled from "styled-components";
import SearchContentMenu from "./SearchContentMenu";
import { IGetContentsResult } from "../../utils/Types";
import Content from "../styled/Content";
import { H2 } from "../../pages/Login";

interface Props {
  searchMovies: IGetContentsResult;
  viewGrid: boolean;
}

const SearchMovieList = ({ searchMovies, viewGrid }: Props) => {
  return searchMovies.results.length ? (
    <>
      {!viewGrid &&
        searchMovies.results.map((content) => (
          <SearchContentMenu key={content.id} content={content} />
        ))}
      {viewGrid && (
        <GridWrapper>
          {searchMovies.results.map((content) => (
            <ContentWrapper key={content.id}>
              <Content content={content} />
            </ContentWrapper>
          ))}
        </GridWrapper>
      )}
    </>
  ) : (
    <NotFoundMessage>찾을 영화가 없습니다.</NotFoundMessage>
  );
};

export default SearchMovieList;

const NotFoundMessage = styled(H2)`
  margin-top: 14rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 1rem;
  margin: 4rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
