import { useLocation } from "react-router-dom";
import Content from "../components/styled/Content";
import { useEffect, useState } from "react";
import { ContentType, IGetContentsResult, Title } from "../utils/Types";
import { Endpoints, getMovies } from "../utils/api";
import LoadingSpinner, { Spinner } from "../components/styled/LoadingSpinner";
import CommonLayout from "../components/main/CommonLayout";
import {
  ContentWrapper,
  GridWrapper,
} from "../components/search/SearchMovieList";
import MainHeader from "../components/main/MainHeader";

const ViewAllPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const title: keyof Endpoints = pathname.split("/")[2] as keyof Endpoints;
  const [movieData, setMovieData] = useState<ContentType[]>();

  const pageTitle = {
    trending: Title.TRENDING,
    upcoming: Title.UPCOMING,
    toprated: Title.TOPRATED,
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: IGetContentsResult = await getMovies(title);
        const results: ContentType[] = data.results;
        setMovieData(results);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <CommonLayout>
      <MainHeader>{pageTitle[title]}</MainHeader>
      <GridWrapper>
        {movieData ? (
          movieData?.map((content) => (
            <ContentWrapper key={content.id}>
              <Content content={content} />
            </ContentWrapper>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </GridWrapper>
    </CommonLayout>
  );
};

export default ViewAllPage;
