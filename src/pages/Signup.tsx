import { useNavigate } from "react-router-dom";
import { Article, H2, H3, MainWrapper, StContact, Wrapper } from "./Login";
import SignUpForm from "../components/login/SignUpForm";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <MainWrapper>
        <Article>
          <H2>회원가입</H2>
          <H3>
            회원가입하고
            <br />
            영화 관련 정보를 담아보세요!
          </H3>
          <SignUpForm />
          <StContact onClick={() => navigate("/login")}>
            이미 계정이 있으시다면?
          </StContact>
        </Article>
      </MainWrapper>
    </Wrapper>
  );
};

export default SignUp;
