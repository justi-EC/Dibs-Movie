import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoginState, loadingState } from "../../utils/atom";
import LoadingSpinner from "../styled/LoadingSpinner";
import { Button } from "../styled/Button";

interface Props {
  children: React.ReactNode;
}

const MainHeader = ({ children }: Props) => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);
  const location = useLocation();
  const isMyPage = location.pathname === "/";
  const loading = useRecoilValue(loadingState);

  return (
    <Header>
      <Head>{children}</Head>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isLogin ? (
            <></>
          ) : (
            <>
              {isMyPage && (
                <BtnWrapper>
                  <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
                  <SignupBtn type="button" onClick={() => navigate("/signup")}>
                    회원가입
                  </SignupBtn>
                </BtnWrapper>
              )}
            </>
          )}
        </>
      )}
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const Head = styled.h2`
  ${({ theme }) => theme.fonts.header1};
`;

const BtnWrapper = styled.div`
  display: flex;
`;

export const LoginBtn = styled(Button)`
  width: 8rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.button2}
  color: ${({ theme }) => theme.colors.white};
`;

const SignupBtn = styled(Button)`
  margin: 0 2rem;
  width: 10rem;
  height: 3.5rem;
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.button2}
`;
