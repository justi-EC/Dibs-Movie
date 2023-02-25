import { useRecoilValue } from "recoil";
import { userDataState } from "../utils/atom";
import { v4 as uuidv4 } from "uuid";
import { appFireStore, appStorage } from "../firebase/config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const useUploadAttachment = () => {
  const { uid } = useRecoilValue(userDataState);

  const handleUploadAttachment = async (attachment: string) => {
    let url = "";
    if (attachment) {
      const attachmentRef = ref(appStorage, `${uid}/${uuidv4()}`);
      await uploadString(attachmentRef, attachment, "data_url");
      url = await getDownloadURL(attachmentRef);
    }
    if (uid) {
      const userRef = doc(appFireStore, "Users", uid);
      await updateDoc(userRef, {
        attachmentUrl: url,
      });
    }
  };

  return { handleUploadAttachment };
};

export default useUploadAttachment;
