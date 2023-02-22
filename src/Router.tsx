import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { appAuth } from "./firebase/config";
import { isLoginState, userDataState } from "./utils/atom";
import MyPage from "./pages/MyPage";
import SignupSuccess from "./pages/SignupSuccess";
import Dibs from "./pages/Dibs";
import ContentDetail from "./pages/ContentDetail";
import Search from "./pages/Search";

const Router = () => {
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUserData = useSetRecoilState(userDataState);
  useEffect(() => {
    appAuth.onAuthStateChanged((user) => {
      setIsLogin(user !== null);
      if (user) {
        setUserData({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      }
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
        <Route path="/detail/:id" element={<ContentDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dibs" element={<Dibs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
