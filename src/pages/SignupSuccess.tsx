import { useNavigate } from "react-router-dom";
import { LoginBtn } from "../components/MainHeader";
import { H2, MainWrapper, Wrapper } from "./Login";
import styled from "styled-components";

const SignupSuccess = () => {
  const navigate = useNavigate();
  return (
    <SuccessWrapper>
      <SuccessMainWrapper>
        <H2>회원가입이 완료되었습니다!</H2>
        <SuccessLoginBtn onClick={() => navigate("/")}>
          영화 탐색하러가기 TODO:
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
