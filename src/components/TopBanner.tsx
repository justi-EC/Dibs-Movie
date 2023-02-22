import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userDataState } from "../utils/atom";

const TopBanner = () => {
  const { displayName, email } = useRecoilValue(userDataState);

  return (
    <Banner>
      <Profile>
        <ProfileImgBox>
          <UserImgWrapper></UserImgWrapper>
          <IcEditProfile htmlFor="input-file"></IcEditProfile>
          <FileInput id="input-file" type="file" />
        </ProfileImgBox>
        <ProfileContent>
          <UserName>{displayName}</UserName>
          <Email>{email}</Email>
        </ProfileContent>
      </Profile>
    </Banner>
  );
};

export default TopBanner;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 23.2rem;
  margin-bottom: 1.6rem;
  border-radius: 2rem 2rem 0 0;
  background-color: ${({ theme }) => theme.colors.white300};
  background-position: right;
  background-repeat: no-repeat;
`;

const Profile = styled.div`
  position: absolute;
  bottom: -48%;
  left: 4%;

  display: flex;
  align-items: flex-end;
`;

const ProfileImgBox = styled.div`
  position: relative;

  width: 16rem;

  margin-right: 3.4rem;
`;

const IcEditProfile = styled.label`
  position: absolute;
  bottom: 0.3rem;
  right: -1.3rem;
`;

const FileInput = styled.input`
  display: none;
`;

const UserImgWrapper = styled.div`
  width: 17.2rem;
  height: 17.2rem;

  border: 0.6rem solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 4.4rem;
`;

const UserName = styled.h3`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.header3};
  color: ${({ theme }) => theme.colors.gray100};
`;

const Email = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: #939393;
`;
