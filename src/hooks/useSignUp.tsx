import { useState } from "react";
import { appAuth, appFireStore } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { UserData } from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const signup = async (signUpFormData: UserData) => {
    const { email, password, displayName } = signUpFormData;
    setError(null);
    setIsPending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        appAuth,
        email,
        password
      );
      const user = userCredential.user;
      if (!user) {
        throw new Error("회원가입에 실패했습니다.");
      }
      await updateProfile(userCredential.user, { displayName });
      await setDoc(doc(appFireStore, "Users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        dibsIdList: [],
      });
      navigate("/signupsuccess");
      setError(null);
      setIsPending(false);
    } catch (error: any) {
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          setError("이미 사용중인 이메일 입니다.");
          break;
        default:
          setError("아이디와 비밀번호를 확인해주세요.");
          break;
      }
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
