import styled from "styled-components";
import Empty from "../components/dibs/Empty";
import { useRecoilValue } from "recoil";
import { loadingState, userDataState } from "../utils/atom";
import { useEffect, useState } from "react";
import Content from "../components/styled/Content";
import LoadingSpinner from "../components/styled/LoadingSpinner";
import { useFilterDibs } from "../hooks/useFilterDibs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { DetailContentType } from "../utils/Types";
import { Scrollbar } from "swiper";
import CommonLayout from "../components/main/CommonLayout";
import MainHeader from "../components/main/MainHeader";
import { GridItem } from "../components/main/SwiperMovies";

const Dibs = () => {
  const { uid } = useRecoilValue(userDataState);
  const { error, dibsData, getData } = useFilterDibs();
  const loading = useRecoilValue(loadingState);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(false);
    if (uid) {
      getData().then(() => setDataLoading(true));
    }
  }, [uid]);

  return (
    <CommonLayout>
      <MainHeader>찜 목록</MainHeader>
      <DefaultSection>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {dibsData.length > 0 ? (
              <>
                {dibsData.length >= 5 ? (
                  <SwiperGrid>
                    <Swiper
                      modules={[Scrollbar]}
                      slidesPerView={4}
                      scrollbar={{ draggable: false }}>
                      {dibsData.map((content: DetailContentType) => {
                        return (
                          <SwiperSlide key={content.id}>
                            <Content content={content} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </SwiperGrid>
                ) : (
                  <DefaultGrid>
                    {dibsData.map((content: DetailContentType) => {
                      return <Content key={content.id} content={content} />;
                    })}
                  </DefaultGrid>
                )}
              </>
            ) : (
              <Empty error={error} loading={dataLoading} />
            )}
          </>
        )}
      </DefaultSection>
    </CommonLayout>
  );
};

export default Dibs;

const DefaultSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const SwiperGrid = styled(GridItem)`
  margin: 0;
`;

const DefaultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
`;
