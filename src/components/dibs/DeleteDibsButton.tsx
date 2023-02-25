import styled from "styled-components";
import { Modal } from "antd";
import { useState } from "react";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { appFireStore } from "../../firebase/config";
import { userDataState } from "../../utils/atom";

interface Props {
  contentId: number;
}

const DeleteDibsButton = ({ contentId }: Props) => {
  const [visible, setVisible] = useState(false);
  const { uid } = useRecoilValue(userDataState);

  const handleOk = async () => {
    const userRef = doc(appFireStore, "Users", uid!);
    await updateDoc(userRef, {
      dibsIdList: arrayRemove(contentId.toString()),
    });
    setVisible(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <DeleteBtn onClick={() => setVisible(true)}>삭제</DeleteBtn>
      <StyledModal
        title="찜 목록 삭제"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="네"
        cancelText="아니요">
        <p>찜 목록에서 삭제하시겠습니까?</p>
      </StyledModal>

      {}
    </>
  );
};

export default DeleteDibsButton;

const DeleteBtn = styled.button`
  ${({ theme }) => theme.fonts.Body1}
  color : ${({ theme }) => theme.colors.gray400};
  transition: 0.1s;
  &:hover {
    color: ${({ theme }) => theme.colors.red100};
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
  }
  .ant-btn-primary {
    font-family: Pretendard;
    background-color: ${({ theme }) => theme.colors.orange300};
    &:hover {
      background-color: ${({ theme }) => theme.colors.orange100};
    }
  }
  .ant-modal-body {
    margin: 1rem 0 1.5rem 0;
    text-align: center;
    ${({ theme }) => theme.fonts.button3};
  }
  .ant-modal-title {
    ${({ theme }) => theme.fonts.button2};
  }
  .ant-modal-footer .ant-btn:first-child {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray400};
    font-family: Pretendard;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.orange100};
      background-color: ${({ theme }) => theme.colors.orange100};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
