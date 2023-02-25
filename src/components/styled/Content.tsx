import styled from "styled-components";
import { ContentType, DetailContentType } from "../../utils/Types";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "antd";
import DeleteDibsButton from "../dibs/DeleteDibsButton";

interface Props {
  content: ContentType | DetailContentType;
}

const Content = ({ content }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl = "https://image.tmdb.org/t/p/w500" + content.poster_path;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);
  }, [content]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <ImgWrapper>
        <ItemImgWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate(`/detail/${content.id}`)}>
          {isLoading ? (
            <Skeleton.Image style={{ width: "100%" }} />
          ) : (
            <ItemImg src={imageUrl} alt={content.title} />
          )}
          {isHover && (
            <HoverContent>
              <MovieTitle>{content.title}</MovieTitle>
              <Button onClick={() => navigate(`/detail/${content.id}`)}>
                정보 보기
              </Button>
            </HoverContent>
          )}
        </ItemImgWrapper>
        {location.pathname === "/dibs" && (
          <DeleteDibsWrapper>
            <DeleteDibsButton contentId={content.id} />
          </DeleteDibsWrapper>
        )}
      </ImgWrapper>
    </>
  );
};

export default Content;

export const ImgWrapper = styled.div`
  position: relative;
  padding: 2rem;
`;

export const ItemImgWrapper = styled.div`
  position: relative;
  border-radius: 4rem;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05, 1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4rem;
  transition: 0.1s;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

const HoverContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const MovieTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.h2}
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.button2}
  color: ${({ theme }) => theme.colors.gray100};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange100};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DeleteDibsWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;
