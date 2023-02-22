import { useEffect } from "react";
import styled from "styled-components";
import { getContentVideos } from "../utils/api";
import { IGetVideos } from "../utils/Types";

const Banner = () => {
  useEffect(() => {
    const loadVideoData = async () => {}; /* TODO: */
  });

  return <Wrapper></Wrapper>;
};

export default Banner;

const Wrapper = styled.section`
  position: relative;
  height: 30rem;
  margin: 0 4rem;
  border-radius: 2rem;
  padding: 4rem 65rem 4rem 7rem;
  background-color: ${({ theme }) => theme.colors.white200};
`;
