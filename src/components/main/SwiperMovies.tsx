import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { ContentType, Title } from "../../utils/Types";
import Content from "../styled/Content";

interface Props {
  data?: ContentType[];
  title: string;
}

const SwiperMovies = ({ data, title }: Props) => {
  const navigate = useNavigate();

  const viewAllHandler = () => {
    let path;
    switch (title) {
      case Title.TRENDING: {
        path = "/viewall/trending";
        break;
      }
      case Title.UPCOMING: {
        path = "/viewall/upcoming";
        break;
      }
      case Title.TOPRATED: {
        path = "/viewall/toprated";
        break;
      }
      default: {
        path = "/";
        break;
      }
    }
    navigate(path);
  };

  {
    return (
      <section>
        <Header>
          <SectionTitle>{title}</SectionTitle>
          <ViewAllBtn onClick={viewAllHandler}>전체보기</ViewAllBtn>
        </Header>
        <GridItem>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}>
            {data &&
              data.map((content: ContentType) => {
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

export default SwiperMovies;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 6rem;
  padding-top: 6rem;
  padding-bottom: 1.4rem;
`;

const SectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const ViewAllBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 3rem;

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
