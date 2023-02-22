import MainHeader from "../components/MainHeader";
import CommonLayout from "../components/CommonLayout";
import styled from "styled-components";
import Empty from "../components/styled/Empty";

const Dibs = () => {
  return (
    <>
      <CommonLayout>
        <MainHeader>찜 목록</MainHeader>
        <DefaultSection>
          <Empty />
        </DefaultSection>
      </CommonLayout>
    </>
  );
};

export default Dibs;

const DefaultSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
