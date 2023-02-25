import styled from "styled-components";

interface Props {
  setViewGrid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchViewButton = ({ setViewGrid }: Props) => {
  return (
    <ToggleSearchView>
      <button onClick={() => setViewGrid(false)}>메뉴 형식</button>
      <button onClick={() => setViewGrid(true)}>그리드 형식</button>
    </ToggleSearchView>
  );
};

export default SearchViewButton;

const ToggleSearchView = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 3rem;

  button {
    margin: 0 0.3rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white400};
    ${({ theme }) => theme.fonts.Body1};
    &:hover {
      background-color: ${({ theme }) => theme.colors.orange300};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
