import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import MyPage from "./pages/MyPage";
import SignupSuccess from "./pages/SignupSuccess";
import Dibs from "./pages/Dibs";
import ContentDetail from "./pages/ContentDetail";
import Search from "./pages/Search";
import ViewAllPage from "./pages/ViewAllPage";

const Router = () => {
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
        <Route path="/viewall/*" element={<ViewAllPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
