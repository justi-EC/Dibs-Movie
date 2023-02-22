import styled from "styled-components";
import { TrendingContentType } from "../../utils/Types";
import Thumbnail from "./Thumbnail";
import { useNavigate } from "react-router-dom";

interface Props {
  content: TrendingContentType;
}
const SearchContent = ({ content }: Props) => {
  const navigate = useNavigate();
  const percent = Math.round(content.vote_average * 10);

  return (
    <>
      <Article onClick={() => navigate(`/detail/${content.id}`)}>
        <Thumbnail content={content} />
        <InfoWrapper>
          <InfoTitle>{content.original_title}</InfoTitle>
          <InfoLabelWrapper>
            <InfoLabel>유저스코어 : {percent}%</InfoLabel>
            <DivideLine />
            <InfoLabel>{content.release_date}</InfoLabel>
          </InfoLabelWrapper>
          <InfoSummary>{content.overview}</InfoSummary>
        </InfoWrapper>
      </Article>
    </>
  );
};

export default SearchContent;

const Article = styled.article`
  display: flex;
  margin-top: 2rem;
  padding: 2rem 8rem 3rem 3rem;
  border-radius: 1.6rem;
  height: 24rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange200};
    cursor: pointer;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

const InfoTitle = styled.strong`
  ${({ theme }) => theme.fonts.header2};
`;

const InfoLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body6};
`;

const DivideLine = styled.div`
  margin: 0 1.2rem;
  background-color: ${({ theme }) => theme.colors.white500};
  width: 0.1rem;
  height: 1.1rem;
`;

const InfoSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body4};
  max-height: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
