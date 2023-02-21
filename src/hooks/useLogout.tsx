import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useSetRecoilState } from "recoil";
import { isLoginState } from "../utils/atom";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const setIsLogin = useSetRecoilState(isLoginState);

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(appAuth);
      setIsLogin(false);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }

    setIsPending(false);
  };

  return { error, isPending, logout };
};
