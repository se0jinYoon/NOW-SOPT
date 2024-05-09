import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

const Signup = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <LoginSignupWrapper title="SIGN UP">
      <Input label="ID" />
      <Input label="PW">
        <InputDetail>비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</InputDetail>
      </Input>
      <Input label="닉네임" />
      <Input label="전화번호">
        <InputDetail>전화번호 형식은 010-****-**** 입니다.</InputDetail>
      </Input>
      <ButtonWrapper>
        <Button content="SIGN UP" $buttonColor="blue" />
        <Button content="뒤로가기" $buttonColor="blue" onClick={onClickBack} />
      </ButtonWrapper>
    </LoginSignupWrapper>
  );
};

export default Signup;

const InputDetail = styled.p`
  position: absolute;
  top: 2.8rem;
  right: 0;

  color: ${({ theme }) => theme.colors.black};
  font-size: 0.75rem;
`;
