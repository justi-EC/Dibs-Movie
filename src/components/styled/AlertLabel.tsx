import styled from "styled-components";

interface Props {
  message: string | undefined;
}

const AlertLabel = ({ message }: Props) => {
  return (
    <LabelWrapper>
      <Strong>{message}</Strong>
    </LabelWrapper>
  );
};

export default AlertLabel;

const LabelWrapper = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 1rem 0 0 0.5rem;
`;

const Strong = styled.strong`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.red100};
`;
