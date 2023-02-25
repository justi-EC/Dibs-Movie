import Banner from "../components/main/Banner";
import CommonLayout from "../components/main/CommonLayout";
import MainHeader from "../components/main/MainHeader";
import SwiperMovies from "../components/main/SwiperMovies";
import {
  IGetContentsResult,
  ContentType,
  Title,
  IVideos,
  IGetVideos,
} from "../utils/Types";
import { getContentVideos, getMovies, getSearchMovies } from "../utils/api";
import { useEffect, useState } from "react";

const Main = () => {
  const [trendingMovieData, setTrendingMovieData] = useState<ContentType[]>();
  const [upComingMovieData, setUpComingMovieData] = useState<ContentType[]>();
  const [topRatedMovieData, setTopRatedMovieData] = useState<ContentType[]>();
  const [trendingVideoData, setTrendingVideoData] = useState<IVideos[]>();
  useEffect(() => {
    const loadData = async () => {
      try {
        const tData: IGetContentsResult = await getMovies("trending");
        const uData: IGetContentsResult = await getMovies("upcoming");
        const trData: IGetContentsResult = await getMovies("toprated");
        const tResults: ContentType[] = tData.results;
        const uResults: ContentType[] = uData.results;
        const trResults: ContentType[] = trData.results;
        setTrendingMovieData(tResults);
        setUpComingMovieData(uResults);
        setTopRatedMovieData(trResults);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (trendingMovieData) {
          const randomIndex = Math.floor(
            Math.random() * trendingMovieData.length
          );
          const randomElement = trendingMovieData[randomIndex];
          const randomId = randomElement.id;
          const vData: IGetVideos = await getContentVideos(randomId);
          const videoContent = vData?.results.filter(
            (video) =>
              (video.type === "Teaser" || video.type === "Trailer") &&
              video.official === true
          ) as IVideos[];
          setTrendingVideoData(videoContent);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (trendingMovieData) {
      loadVideo();
    }
  }, [trendingMovieData]);

  return (
    <>
      <CommonLayout>
        <MainHeader>메인</MainHeader>
        {trendingMovieData ? <Banner vData={trendingVideoData} /> : <Banner />}
        <SwiperMovies data={trendingMovieData} title={Title.TRENDING} />
        <SwiperMovies data={upComingMovieData} title={Title.UPCOMING} />
        <SwiperMovies data={topRatedMovieData} title={Title.TOPRATED} />
      </CommonLayout>
    </>
  );
};

export default Main;
