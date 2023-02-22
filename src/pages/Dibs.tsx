import MainHeader from "../components/MainHeader";
import CommonLayout from "../components/CommonLayout";
import styled from "styled-components";
import Empty from "../components/styled/Empty";
import { appFireStore } from "../firebase/config";
import { useRecoilValue } from "recoil";
import { userDataState } from "../utils/atom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserDataType } from "../utils/Types";

const Dibs = () => {
  const { uid } = useRecoilValue(userDataState);
  const userRef = doc(appFireStore, "Users", uid!);
  const [dibsData, setDibsData] = useState<UserDataType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const userDocSnapshot = await getDoc(userRef);
        const userData = userDocSnapshot.data() as UserDataType;
        setDibsData(userData);
      } catch (error: any) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <CommonLayout>
        <MainHeader>찜 목록</MainHeader>
        {dibsData?.dibsIdList ? (
          <DefaultSection>
            <Empty />
          </DefaultSection>
        ) : (
          <DefaultSection></DefaultSection>
        )}
      </CommonLayout>
    </>
  );
};

export default Dibs;

const DefaultSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
