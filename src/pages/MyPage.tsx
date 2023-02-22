import MainHeader from "../components/MainHeader";
import CommonLayout from "../components/CommonLayout";
import UserContent from "../components/UserContent";

const MyPage = () => {
  return (
    <CommonLayout>
      <MainHeader>마이페이지</MainHeader>
      <UserContent />
    </CommonLayout>
  );
};

export default MyPage;
