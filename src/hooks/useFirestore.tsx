import { addDoc, deleteDoc, collection, doc } from "firebase/firestore";
import { appFireStore, timeStamp } from "../firebase/config";
import { useSetRecoilState } from "recoil";
import { dibsContentState } from "../utils/atom";

export const useFirestore = (transaction: string) => {
  const colRef = collection(appFireStore, transaction);
  const setProgressState = useSetRecoilState(dibsContentState);

  const addDocument = async (doc: any) => {
    setProgressState((prev) => ({
      ...prev,
      isPending: true,
    }));

    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      return docRef;
    } catch (error: any) {
      setProgressState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  const deleteDocument = async (id: string) => {
    setProgressState((prev) => ({
      ...prev,
      isPending: true,
    }));
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      return docRef;
    } catch (error: any) {
      setProgressState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return { addDocument, deleteDocument };
};
