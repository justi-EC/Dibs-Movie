import styled from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <Content>하이</Content> {/* TODO: */}
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  position: relative;
  margin: 0 4rem;
  border-radius: 2rem;
  padding: 4rem 65rem 4rem 7rem;
  background-color: ${({ theme }) => theme.colors.white200};
`;

const Content = styled.p`
  margin-bottom: 3rem;
  width: 40rem;
  ${({ theme }) => theme.fonts.body2}
`;
