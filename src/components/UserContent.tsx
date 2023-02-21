import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserInfo } from "../pages/MyPage";
import { isLoginState } from "../utils/atom";
import { Button } from "./styled/Button";
import { useLogout } from "../hooks/useLogout";

interface Props {
  userInfo: UserInfo;
}

const UserContent = ({ userInfo }: Props) => {
  const { error, isPending, logout } = useLogout();
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Wrapper>
      {isLogin ? (
        <LogoutBtn onClick={handleLogout} id="btn_logout">
          로그아웃
        </LogoutBtn>
      ) : (
        <LoginBtn type="button">
          <Link to="/login">로그인</Link>
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
