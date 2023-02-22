import MainHeader from "../components/MainHeader";
import Banner from "../components/Banner";
import CommonLayout from "../components/CommonLayout";
import TrendMovies from "../components/TrendMovies";

const Main = () => {
  return (
    <>
      <CommonLayout>
        <MainHeader>메인</MainHeader>
        <Banner />
        <TrendMovies />
      </CommonLayout>
    </>
  );
};

export default Main;
