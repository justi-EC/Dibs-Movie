import styled from "styled-components";
import NavWrapper from "./NavWrapper";
import MainLayout from "./MainLayout";

interface Props {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <NavWrapper />
      <MainLayout>{children}</MainLayout>
    </Wrapper>
  );
};

export default CommonLayout;

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray100};
`;
