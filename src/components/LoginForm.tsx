import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "./styled/Button";
import { Input } from "./styled/Input";
import AlertLabel from "./styled/AlertLabel";
import { emailErrorPatterns, passwordErrorPatterns } from "../utils/check";
import { useLogin } from "../hooks/useLogin";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../utils/atom";
import LoadingSpinner from "./styled/LoadingSpinner";
import { useEffect } from "react";

export interface UserData {
  [x: string]: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { error, isPending, login } = useLogin();
  const isLogin = useRecoilValue(isLoginState);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UserData>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = async (loginFormData: UserData) => {
    await login(loginFormData);
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Label htmlFor="loginEmail">이메일</Label>
        <Input
          {...register("email", emailErrorPatterns)}
          placeholder="이메일 입력"
        />
        {errors.email?.message && <AlertLabel message={errors.email.message} />}

        <Label htmlFor="loginPwd">비밀번호</Label>
        <Input
          {...register("password", passwordErrorPatterns)}
          placeholder="비밀번호 입력"
          type="password"
        />
        {errors.password?.message && (
          <AlertLabel message={errors.password.message} />
        )}
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <LoginBtn disabled={!isDirty} type="submit">
            로그인
          </LoginBtn>
        )}
        {error && (
          <AlertLabel message="아이디 또는 비밀번호를 확인하세요."></AlertLabel>
        )}
      </Form>
    </>
  );
};

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin: 1rem 0;
  ${({ theme }) => theme.fonts.body1}
`;

const LoginBtn = styled(Button)<{ disabled: boolean }>`
  width: 45rem;
  height: 5rem;
  margin-top: 5rem;
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.button}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.white400};
      color: ${({ theme }) => theme.colors.gray300};
      &:hover {
        cursor: default;
      }
    `}
`;
