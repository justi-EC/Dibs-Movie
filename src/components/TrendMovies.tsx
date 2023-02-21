import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getTrendingContents } from "../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { IContent, IGetContentsResult } from "../utils/Types";
import Content from "./styled/Content";

const TrendMovies = () => {
  const [trendingMovieData, setTrendingMovieData] = useState<IContent[] | null>(
    null
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: IGetContentsResult = await getTrendingContents();
        const results: IContent[] = data.results;
        setTrendingMovieData(results);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  {
    return (
      <section>
        <Header>
          <Title>요즘 영화 트렌드</Title>
          <MainLink to="">전체보기</MainLink> {/* TODO: */}
        </Header>
        <GridItem>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}>
            {trendingMovieData &&
              trendingMovieData.map((content: IContent) => {
                return (
                  <SwiperSlide key={content.id}>
                    <Content content={content} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </GridItem>
      </section>
    );
  }
};

export default TrendMovies;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 4rem;
  padding-top: 6rem;
  padding-bottom: 1.4rem;
`;

const Title = styled.h3`
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const MainLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 3.6rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.button2};
  color: ${({ theme }) => theme.colors.gray300};
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: 4.3rem;
`;
