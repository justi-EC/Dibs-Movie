import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import {
  emailErrorPatterns,
  nicknameErrorPatterns,
  passwordErrorPatterns,
} from "../../utils/check";
import { Input } from "../styled/Input";
import AlertLabel from "../styled/AlertLabel";
import { Button } from "../styled/Button";
import { UserData } from "./LoginForm";
import { useSignup } from "../../hooks/useSignUp";
import { useEffect, useState } from "react";
import LoadingSpinner from "../styled/LoadingSpinner";

const SignUpForm = () => {
  const { error, isPending, signup } = useSignup();
  const [errMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UserData>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      displayName: "",
    },
  });

  const submitForm = async (signUpFormData: UserData) => {
    await signup(signUpFormData);
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Label htmlFor="loginEmail">이메일</Label>
      <Input
        {...register("email", emailErrorPatterns)}
        placeholder="이메일을 입력하세요."
      />
      {errors.email?.message && <AlertLabel message={errors.email.message} />}

      <Label htmlFor="loginPwd">비밀번호</Label>
      <Input
        {...register("password", passwordErrorPatterns)}
        placeholder="비밀번호를 입력하세요."
        type="password"
      />
      {errors.password?.message && (
        <AlertLabel message={errors.password.message} />
      )}
      <Label htmlFor="loginPwd">이름</Label>
      <Input
        {...register("displayName", nicknameErrorPatterns)}
        placeholder="이름을 입력하세요."
        type="displayName"
      />

      {errors.displayName?.message && (
        <AlertLabel message={errors.displayName.message} />
      )}
      {isPending ? (
        <LoadingSpinner />
      ) : (
        <LoginBtn disabled={!isDirty} type="submit">
          회원가입
        </LoginBtn>
      )}
      {error && <AlertLabel message={errMessage}></AlertLabel>}
    </Form>
  );
};

export default SignUpForm;

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
