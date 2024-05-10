import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import Button from '../../commons/Button';

import { getUserInfo } from '../../apis/getUserInfo';

const MyPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    authenticationId: '',
    nickname: '',
    phone: '',
  });
  const { userId } = useParams();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await getUserInfo(userId);
        setUserInfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserInfo();
  }, []);
  console.log(userInfo);

  const onClickHome = () => {
    navigate('/');
  };

  return (
    <LoginSignupWrapper title="MY PAGE">
      <UserInfoWrapper>
        <UserInfoLabel>ID</UserInfoLabel>
        <UserInfoContent>{userInfo.authenticationId}</UserInfoContent>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>닉네임</UserInfoLabel>
        <UserInfoContent>{userInfo.nickname}</UserInfoContent>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>전화번호</UserInfoLabel>
        <UserInfoContent>{userInfo.phone}</UserInfoContent>
      </UserInfoWrapper>

      <Button content="비밀번호 변경" $buttonColor="blue" />
      <Button
        content="홈으로"
        $buttonColor="lightPink"
        $hoverColor="lightPink"
        $fontColor="black"
        $hoverFontColor="black"
        onClick={onClickHome}
      />
    </LoginSignupWrapper>
  );
};

export default MyPage;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  width: 17rem;
`;

const UserInfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.blue};

  font-size: 1.2rem;
  font-weight: bolder;
`;

const UserInfoContent = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
`;
