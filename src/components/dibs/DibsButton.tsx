import styled from "styled-components";
import { useParams } from "react-router-dom";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { appFireStore } from "../../firebase/config";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../utils/atom";
import { useState } from "react";
import Message from "../styled/Message";

const DibsButton = () => {
  const { uid } = useRecoilValue(userDataState);
  const { id } = useParams();
  const [showMessage, setShowMessage] = useState(false);
  const [messageData, setMessageData] = useState({
    content: "",
    type: "",
  });

  const saveDibsContent = async () => {
    if (!uid) {
      setMessageData({
        content: "로그인 후 이용하세요",
        type: "error",
      });
      handleShowMessage();
    } else {
      const userRef = doc(appFireStore, "Users", uid);
      const userSnap = await getDoc(userRef);
      const dibsIdList = userSnap.data()?.dibsIdList || [];

      if (dibsIdList.includes(id)) {
        setMessageData({
          content: "이미 찜한 컨텐츠입니다.",
          type: "error",
        });
        handleShowMessage();
        return;
      }

      await updateDoc(userRef, {
        dibsIdList: arrayUnion(id),
      });
      setMessageData({
        content: "찜 목록에 추가되었습니다.",
        type: "success",
      });
      handleShowMessage();
    }
  };

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <>
      <DibsBtn onClick={saveDibsContent}>찜하기</DibsBtn>
      {showMessage && (
        <Message type={messageData.type} content={messageData.content} />
      )}
    </>
  );
};

export default DibsButton;

const DibsBtn = styled.button`
  margin: 2rem;
  padding: 1rem;
  width: 100%;
  border-radius: 1.3rem;
  ${({ theme }) => theme.fonts.h1};
  background-color: ${({ theme }) => theme.colors.red100};
  color: ${({ theme }) => theme.colors.white};
`;
