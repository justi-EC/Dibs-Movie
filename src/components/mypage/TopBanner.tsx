import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { attachmentState, isLoginState, userDataState } from "../../utils/atom";

interface Props {
  changeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteImg: () => Promise<void>;
}

const TopBanner = ({ changeImg, deleteImg }: Props) => {
  const { displayName, email } = useRecoilValue(userDataState);
  const isLogin = useRecoilValue(isLoginState);
  const attachment = useRecoilValue(attachmentState);
  const [isHover, setIsHover] = useState(false);

  console.log(attachment);
  return (
    <Banner>
      <Profile>
        <ProfileImgBox>
          <UserImgWrapper
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isLogin && attachment ? (
              <img src={attachment} alt="유저 이미지" />
            ) : null}
            {isHover && attachment && (
              <DeleteImgBtn onClick={deleteImg}>
                <RiDeleteBin6Line size={50} />
              </DeleteImgBtn>
            )}
          </UserImgWrapper>
          <EditProfile htmlFor="input-file">
            <AiFillEdit size={50} />
          </EditProfile>
          <FileInput
            id="input-file"
            type="file"
            onChange={changeImg}
            accept="image/jpg, image/png, image/jpeg"
          />
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
  height: 12rem;
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

const EditProfile = styled.label`
  position: absolute;
  bottom: 0.3rem;
  right: -1.3rem;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const UserImgWrapper = styled.div`
  width: 17rem;
  height: 17rem;
  background-color: ${({ theme }) => theme.colors.white500};
  border: 0.6rem solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const DeleteImgBtn = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 7.5rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red100};
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 7rem;
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
