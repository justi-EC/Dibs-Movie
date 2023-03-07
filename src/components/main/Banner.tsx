import styled from "styled-components";
import { IVideos } from "../../utils/Types";
import LoadingSpinner from "../styled/LoadingSpinner";

interface Props {
  vData?: IVideos[];
}

const Banner = ({ vData }: Props) => {
  console.log(vData);
  return (
    <>
      {!vData ? (
        <Wrapper>
          <LoadingSpinner />
        </Wrapper>
      ) : (
        <Wrapper>
          {vData.length > 0 ? (
            vData
              .slice(0, 1)
              .map((video) => (
                <div key={video.id}>
                  {video.key && (
                    <Iframe
                      title="youtube video player"
                      width="100%"
                      src={`https://www.youtube-nocookie.com/embed/${video.key}?autoplay=1&mute=1`}
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                    />
                  )}
                </div>
              ))
          ) : (
            <Message>유튜브 동영상이 없습니다.</Message>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Banner;

const Wrapper = styled.section`
  position: relative;
  height: 35em;
  margin: 0 4rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white200};
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  aspect-ratio: 16 / 9;
`;

const Message = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.Body1}
`;
