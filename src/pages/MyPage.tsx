import { useState } from "react";
import MainHeader from "../components/MainHeader";
import CommonLayout from "../components/styled/CommonLayout";
import UserContent from "../components/UserContent";

export interface UserInfo {
  email: string;
  img: string;
  nickname: string;
  reviewCount: number;
}

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    img: "",
    nickname: "",
    reviewCount: 0,
  });

  return (
    <CommonLayout>
      <MainHeader>마이페이지</MainHeader>
      <UserContent userInfo={userInfo} />
    </CommonLayout>
  );
};

export default MyPage;
