import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const Empty = () => {
  return (
    <Article>
      <H3>찜 목록이 비어있습니다.</H3>
      <Paragraph>
        보고싶은 영화를 찾고
        <br /> 찜 목록에 영화를 추가 하세요.
      </Paragraph>
      <AddMoviesBtn>
        <Link to="/search">영화 검색</Link>
      </AddMoviesBtn>
    </Article>
  );
};

export default Empty;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 15rem;
`;

const StImg = styled.img`
  width: 28.4rem
  height: 16.6rem;

  margin-bottom: 1.1rem;
`;

const H3 = styled.h3`
  ${({ theme }) => theme.fonts.header3}

  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  text-align: center;

  margin-bottom: 2.4rem;
  ${({ theme }) => theme.fonts.body6}
`;

const AddMoviesBtn = styled(Button)`
  width: 13.7rem;
  height: 4.6rem;

  ${({ theme }) => theme.fonts.button}
  border-radius: 1rem;
`;
