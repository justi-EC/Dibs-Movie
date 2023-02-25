import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainLayout;

const Wrapper = styled.main`
  position: relative;
  width: calc(100% - 13rem);
  height: 100vh;
  overflow-y: scroll;
  margin-left: 13rem;
  border-radius: 2rem 0 0 2rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
`;
