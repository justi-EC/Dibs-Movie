import { useNavigate } from "react-router-dom";
import { H2, MainWrapper, Wrapper } from "./Login";
import styled from "styled-components";
import { LoginBtn } from "../components/main/MainHeader";

const SignupSuccess = () => {
  const navigate = useNavigate();
  return (
    <SuccessWrapper>
      <SuccessMainWrapper>
        <H2>회원가입이 완료되었습니다!</H2>
        <SuccessLoginBtn onClick={() => navigate("/")}>
          메인페이지로 이동
        </SuccessLoginBtn>
      </SuccessMainWrapper>
    </SuccessWrapper>
  );
};

export default SignupSuccess;

const SuccessMainWrapper = styled(MainWrapper)`
  flex-direction: column;
`;

const SuccessWrapper = styled(Wrapper)`
  margin-top: 20rem;
`;

const SuccessLoginBtn = styled(LoginBtn)`
  width: 15rem;
`;
