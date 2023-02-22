import styled, { keyframes } from "styled-components";

interface Props {
  type: string;
  content: string;
}

const Message = ({ type, content }: Props) => {
  return (
    <MessageContainer>
      <MessageWrapper type={type}>{content}</MessageWrapper>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 13rem;
  left: 0;
  right: 0;
  z-index: 999;
`;

const MessageWrapper = styled.div<{ type: string }>`
  background-color: ${({ type, theme }) =>
    type === "success"
      ? `${theme.colors.green100}`
      : type === "error"
      ? `${theme.colors.red100}`
      : type === "warning"
      ? `${theme.colors.orange300}`
      : `${theme.colors.gray100}`};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 4rem;
  border-radius: 1.3rem;
`;
