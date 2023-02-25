import styled from "styled-components";
import { ContentType } from "../../utils/Types";

interface Props {
  content: ContentType;
}

const Thumbnail = ({ content }: Props) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + content.poster_path;

  return (
    <>
      {imageUrl ? (
        <ItemImg src={imageUrl} alt={content.title} />
      ) : (
        <ItemImg
          src="https://ifh.cc/g/LxqcAw.png"
          alt="표지가 없습니다."></ItemImg>
      )}
    </>
  );
};

export default Thumbnail;

export const ItemImg = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 18rem;
  margin: 1.5rem 3rem 0 0;
  border-radius: 0.8rem;
`;
