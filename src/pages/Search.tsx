import styled, { css } from "styled-components";
import { useDebounce } from "../hooks/useDebounce";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
import { getSearchMovies } from "../utils/api";
import { IGetContentsResult } from "../utils/Types";
import SearchChangePageButton from "../components/search/SearchChangePageButton";
import CommonLayout from "../components/main/CommonLayout";
import MainHeader from "../components/main/MainHeader";
import SearchMovieList from "../components/search/SearchMovieList";
import SearchViewButton from "../components/search/SearchViewButton";

const Search = () => {
  const { query, debounceQuery, setDebounceQuery } = useDebounce<string>("");
  const [searchResults, setSearchResults] = useState<IGetContentsResult>();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewGrid, setViewGrid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    handleDebounceQuery(text);
  };

  const handleDebounceQuery = (tempQuery: string) => {
    setDebounceQuery(tempQuery);
  };

  const handleCancel = () => {
    handleDebounceQuery("");
  };

  const handleSearchMovie = async (query: string, page: number) => {
    const data = await getSearchMovies(query, currentPage);
    setSearchResults(data);
    setCurrentPage(page);
  };

  useEffect(() => {
    if (query.length > 0) {
      handleSearchMovie(query, currentPage);
    }
  }, [query]);

  return (
    <CommonLayout>
      <MainHeader>영화 검색</MainHeader>
      <Wrapper>
        <SearchBarWrapper isqueryempty={debounceQuery}>
          <InputSearch
            onChange={handleChange}
            type="text"
            value={debounceQuery}
            id="addBookSearch"
            placeholder="영화 제목을 검색하세요."
          />
          <Cancel
            onClick={handleCancel}
            isqueryempty={debounceQuery}
            size={50}
          />
        </SearchBarWrapper>
        {debounceQuery && searchResults && (
          <>
            <SearchMovieList searchMovies={searchResults} viewGrid={viewGrid} />
            <SearchViewButton setViewGrid={setViewGrid} />
            <SearchChangePageButton
              currentPage={currentPage}
              searchResults={searchResults}
              handleSearchMovie={handleSearchMovie}
              query={query}
            />
          </>
        )}
      </Wrapper>
    </CommonLayout>
  );
};

export default Search;

const Wrapper = styled.section`
  padding-top: 3rem;
`;

const SearchBarWrapper = styled.div<{ isqueryempty: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  margin: 0 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white200};
  height: 6rem;
  ${({ isqueryempty }) =>
    isqueryempty === ""
      ? css`
          border: 0.2rem solid ${({ theme }) => theme.colors.white200};
        `
      : css`
          border: 0.2rem solid ${({ theme }) => theme.colors.gray100};
        `}
`;

const InputSearch = styled.input`
  width: 100%;
  padding-left: 3rem;
  background-color: ${({ theme }) => theme.colors.white200};
  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const Cancel = styled(ImCancelCircle)<{ isqueryempty: string }>`
  margin-right: 2rem;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ isqueryempty }) => (isqueryempty === "" ? "display: none;" : "")}
  &:hover {
    cursor: pointer;
  }
`;
