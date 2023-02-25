import styled from "styled-components";
import { Button } from "../styled/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../utils/atom";

interface Props {
  error: string | null;
  loading: boolean;
}

const Empty = ({ error, loading }: Props) => {
  const navigate = useNavigate();
  const { uid } = useRecoilValue(userDataState);

  return (
    <Article>
      {error && (
        <>
          <H3>찜 목록이 비어있습니다.</H3>
          <Paragraph>
            보고싶은 영화를 찾고
            <br /> 찜 목록에 영화를 추가 하세요.
          </Paragraph>
          <Btn onClick={() => navigate("/search")}>영화 검색</Btn>
        </>
      )}
      {!error && !uid && (
        <>
          <H3>로그인 이후 이용 가능합니다.</H3>
          <Paragraph>
            로그인하고
            <br /> 찜 목록에 영화를 추가 하세요.
          </Paragraph>
          <Btn onClick={() => navigate("/login")}>로그인하기</Btn>
        </>
      )}
      {!error && uid && loading && (
        <>
          <H3>찜 목록이 비어있습니다.</H3>
          <Paragraph>
            보고싶은 영화를 찾고
            <br /> 찜 목록에 영화를 추가 하세요.
          </Paragraph>
          <Btn onClick={() => navigate("/search")}>영화 검색</Btn>
        </>
      )}
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

const H3 = styled.h3`
  ${({ theme }) => theme.fonts.header3}

  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  text-align: center;

  margin-bottom: 2.5rem;
  ${({ theme }) => theme.fonts.body6}
`;

const Btn = styled(Button)`
  width: 14rem;
  height: 5rem;

  ${({ theme }) => theme.fonts.button}
  border-radius: 1rem;
`;
