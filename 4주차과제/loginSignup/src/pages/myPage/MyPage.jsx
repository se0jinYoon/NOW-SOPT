import styled from 'styled-components';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import Button from '../../commons/Button';

const MyPage = () => {
  return (
    <LoginSignupWrapper title="MY PAGE">
      <UserInfoWrapper>
        <UserInfoLabel>ID</UserInfoLabel>
        <UserInfoContent>아이디지롱</UserInfoContent>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>닉네임</UserInfoLabel>
        <UserInfoContent>닉네임이지롱</UserInfoContent>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>전화번호</UserInfoLabel>
        <UserInfoContent>전화번호지롱</UserInfoContent>
      </UserInfoWrapper>

      <Button content="비밀번호 변경" $buttonColor="blue" />
      <Button
        content="홈으로"
        $buttonColor="lightPink"
        hoverColor="lightPink"
        fontColor="black"
        hoverFontColor="black"
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
