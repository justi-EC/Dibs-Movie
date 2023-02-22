import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoginState, userDataState } from "../utils/atom";
import TopBanner from "./TopBanner";
import { Button } from "./styled/Button";
import { useLogout } from "../hooks/useLogout";

const UserContent = () => {
  const { error, isPending, logout } = useLogout();
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);
  const resetUserData = useResetRecoilState(userDataState);

  const handleLogout = () => {
    logout();
    resetUserData();
  };

  return (
    <Wrapper>
      <TopBanner />
      {isLogin ? (
        <LogoutBtn onClick={handleLogout} id="btn_logout">
          로그아웃
        </LogoutBtn>
      ) : (
        <LoginBtn type="button" onClick={() => navigate("/login")}>
          로그인
        </LoginBtn>
      )}
    </Wrapper>
  );
};

export default UserContent;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 29.4rem;

  margin-bottom: 10rem;
  padding: 0 4rem;
`;

const LoginBtn = styled(Button)`
  width: 13.5rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button};
`;

const LogoutBtn = styled(LoginBtn)`
  background-color: ${({ theme }) => theme.colors.gray300};
`;
