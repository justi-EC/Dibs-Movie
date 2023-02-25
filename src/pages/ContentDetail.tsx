import { Link, useParams } from "react-router-dom";
import { DetailContentType, StatusColorType } from "../utils/Types";
import { ImgWrapper, ItemImg } from "../components/styled/Content";
import styled from "styled-components";
import { Article, H2, H3 } from "./Login";
import { MainWrapper } from "./Login";
import { Progress } from "antd";
import { useEffect, useState } from "react";
import { getDetailContents } from "../utils/api";
import { FaExternalLinkAlt, FaImdb } from "react-icons/fa";
import LoadingSpinner from "../components/styled/LoadingSpinner";
import DibsButton from "../components/dibs/DibsButton";
import CommonLayout from "../components/main/CommonLayout";
import MainHeader from "../components/main/MainHeader";

const ContentDetail = () => {
  const { id } = useParams();
  const [results, setResults] = useState<DetailContentType | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: DetailContentType = await getDetailContents(id!);
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  if (!results) {
    return (
      <CommonLayout>
        <LoadingSpinner />
      </CommonLayout>
    );
  }

  const statusColor = () => {
    switch (results.status) {
      case "Rumored":
        return "orange";
      case "Planned":
        return "teal";
      case "In Production":
        return "darkblue";
      case "Post Production":
        return "purple";
      case "Released":
        return "green";
      case "Canceled":
        return "red";
    }
  };

  const imageDetailUrl =
    "https://image.tmdb.org/t/p/w500" + results.poster_path;

  const percent = Math.round(results.vote_average * 10);
  const voteCount = results.vote_count;

  return (
    <CommonLayout>
      <MainHeader>
        영화 정보
        <Link to={results.homepage}>
          <SiteBtn>
            <FaExternalLinkAlt />
            Website
          </SiteBtn>
        </Link>
        <Link to={"https://www.imdb.com/title/" + results.imdb_id}>
          <SiteBtn>
            <FaImdb />
            IMDB
          </SiteBtn>
        </Link>
      </MainHeader>
      <Wrapper>
        <MainWrapper>
          <DetailWrapper>
            <ItemImg src={imageDetailUrl} alt={results.title} />
          </DetailWrapper>
          <DetailWrapper>
            <Article>
              <H2>{results.title}</H2>
              <H3>
                <span>&bull; 개봉일 : {results.release_date}</span>
                <span>&nbsp; &bull; {results.runtime}분</span>
                <ReleaseBtn color={statusColor()}>{results.status}</ReleaseBtn>
              </H3>
              <H3>{results.overview}</H3>
              <GenreWrapper>
                {results.genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </GenreWrapper>
              <ProgressWrapper>
                <div>
                  <Progress type="circle" percent={percent} width={120} />
                </div>
                <div>&bull; {voteCount}명 참여</div>
              </ProgressWrapper>
              <DibsButton />
            </Article>
          </DetailWrapper>
        </MainWrapper>
      </Wrapper>
    </CommonLayout>
  );
};

export default ContentDetail;

export const Wrapper = styled.div`
  display: flex;
`;

const DetailWrapper = styled(ImgWrapper)`
  height: 100%;

  div:last-child {
    ${({ theme }) => theme.fonts.body6}
    margin-top: 1rem;
  }

  img {
    margin: 5rem 3rem 0 0;
  }
`;

const ReleaseBtn = styled.button<{ color?: StatusColorType }>`
  margin-left: 2rem;
  ${({ theme }) => theme.fonts.body2};
  color: ${({ color }) => color};
  border: 0.3rem solid ${({ color }) => color};
  padding: 0.2rem;
  width: 12rem;
  cursor: default;
`;

const ProgressWrapper = styled.div`
  text-align: center;
  margin: 0 0.1rem;
`;

const GenreWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Genre = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1.3rem;
  background-color: ${({ theme }) => theme.colors.orange300};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};
  cursor: default;
`;

const SiteBtn = styled.button`
  margin-left: 2rem;
  ${({ theme }) => theme.fonts.body0};
  color: ${({ theme }) => theme.colors.gray400};
  &:hover {
    color: ${({ theme }) => theme.colors.orange100};
  }
`;
