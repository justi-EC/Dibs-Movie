import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  min-width: 100vw;
  min-height: 100vh;
  margin-left: 5rem;
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  margin: auto;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: ${({ theme }) => theme.colors.gray100} transparent
      ${({ theme }) => theme.colors.gray100} transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
