import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { appAuth } from "./firebase/config";
import { isLoginState } from "./utils/atom";
import MyPage from "./pages/MyPage";
import SignupSuccess from "./pages/SignupSuccess";

const Router = () => {
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    appAuth.onAuthStateChanged((user) => {
      setIsLogin(user !== null);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
