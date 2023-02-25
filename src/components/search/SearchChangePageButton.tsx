import styled from "styled-components";
import { IGetContentsResult } from "../../utils/Types";

interface Props {
  currentPage: number;
  searchResults?: IGetContentsResult;
  handleSearchMovie: (query: string, page: number) => Promise<void>;
  query: string;
}

const SearchChangePageButton = ({
  currentPage,
  searchResults,
  handleSearchMovie,
  query,
}: Props) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      handleSearchMovie(query, currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < searchResults!.total_pages) {
      handleSearchMovie(query, currentPage + 1);
    }
  };

  return (
    <PageChangeView>
      <Btn disabled={currentPage === 1} onClick={handlePrevClick}>
        이전 페이지
      </Btn>
      <Btn
        disabled={currentPage === searchResults?.total_pages}
        onClick={handleNextClick}>
        다음 페이지
      </Btn>
    </PageChangeView>
  );
};

export default SearchChangePageButton;

const PageChangeView = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 20;
  margin: 3rem;
`;

const Btn = styled.button`
  margin: 0 0.3rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray100 : theme.colors.orange100};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.white};
  ${({ theme }) => theme.fonts.Body1};
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;
