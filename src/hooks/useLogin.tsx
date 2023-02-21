import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserData } from "../components/LoginForm";
import { useSetRecoilState } from "recoil";
import { isLoginState } from "../utils/atom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const setIsLogin = useSetRecoilState(isLoginState);

  const login = async (loginFormData: UserData) => {
    const { email, password } = loginFormData;
    setError(null);
    setIsPending(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        appAuth,
        email,
        password
      );
      const user = userCredential.user;
      setIsLogin(true);
      setError(null);
      setIsPending(false);

      if (!user) {
        throw new Error("로그인에 실패했습니다.");
      }
    } catch (error: any) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, login };
};
