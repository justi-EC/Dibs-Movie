import { useState } from "react";
import { appFireStore } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { userDataState } from "../utils/atom";
import { DetailContentType } from "../utils/Types";
import { getDetailContents } from "../utils/api";

export const useFilterDibs = () => {
  const [error, setError] = useState<string | null>(null);
  const { uid } = useRecoilValue(userDataState);
  const [dibsData, setDibsData] = useState<DetailContentType[]>([]);

  const getData = async () => {
    try {
      const userRef = doc(appFireStore, "Users", uid!);
      const userDocSnapshot = await getDoc(userRef);
      const userData = userDocSnapshot.data();
      if (userData) {
        const filteredData = await Promise.all(
          userData.dibsIdList.map((movieId: string) =>
            getDetailContents(movieId)
          )
        );
        setDibsData(filteredData);
      }
    } catch (error: any) {
      setError("데이터 가져오기 실패");
    }
  };
  return { error, dibsData, getData };
};
