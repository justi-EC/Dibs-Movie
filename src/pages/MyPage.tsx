import UserContent from "../components/mypage/UserContent";
import useUploadAttachment from "../hooks/useUploadAttachment";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { attachmentState, userDataState } from "../utils/atom";
import { doc, getDoc } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import CommonLayout from "../components/main/CommonLayout";
import MainHeader from "../components/main/MainHeader";

const MyPage = () => {
  const setAttachment = useSetRecoilState(attachmentState);
  const { handleUploadAttachment } = useUploadAttachment();
  const { uid } = useRecoilValue(userDataState);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files) {
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = async (finishedEvent: ProgressEvent<FileReader>) => {
        const { result } = finishedEvent.currentTarget as FileReader;
        setAttachment(result as string);
        await handleUploadAttachment(result as string);
      };
      reader.readAsDataURL(theFile);
      e.currentTarget.value = "";
    }
  };

  const onClearAttachment = async () => {
    setAttachment(null);
    await handleUploadAttachment("");
  };

  useEffect(() => {
    const getData = async () => {
      if (uid) {
        const userRef = doc(appFireStore, "Users", uid);
        const attachmentSnap = await getDoc(userRef);
        const attachmentData = attachmentSnap.data();
        if (attachmentData) {
          setAttachment(attachmentData.attachmentUrl);
        }
      }
    };
    getData();
  }, [uid]);

  return (
    <CommonLayout>
      <MainHeader>마이페이지</MainHeader>
      <UserContent
        changeImg={handleImageChange}
        deleteImg={onClearAttachment}
      />
    </CommonLayout>
  );
};

export default MyPage;
