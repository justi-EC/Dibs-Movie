import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Article>
            <H2>로그인</H2>
            <H3>
              로그인하고
              <br />
              영화 관련 정보를 담아보세요!
            </H3>
            <LoginForm />
            <StContact onClick={() => navigate("/signup")}>
              회원가입 하러 가기
            </StContact>
          </Article>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default Login;

export const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
`;

export const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45rem;
`;

export const H2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray100};
`;

export const H3 = styled.h3`
  margin-bottom: 2rem;
  text-align: center;
  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray300};
`;

export const StContact = styled.a`
  margin: 2rem 0 5rem 0;
  text-align: center;
  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.gray100};

  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;
