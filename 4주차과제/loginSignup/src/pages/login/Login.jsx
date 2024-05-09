import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';

const Login = () => {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate('/signUp');
  };
  return (
    <LoginSignupWrapper title="LOGIN">
      <LoginImg src="./src/assets/img/loginImg.jpeg" alt="로그인 이미지" />
      <Input label="ID" />
      <Input label="PW" />
      <ButtonWrapper>
        <Button content="LOGIN" $buttonColor="blue"></Button>
        <Button content="SIGN UP" $buttonColor="blue" onClick={onClickSignup}></Button>
      </ButtonWrapper>
    </LoginSignupWrapper>
  );
};

export default Login;

const LoginImg = styled.img`
  width: 13rem;
  height: 13rem;

  border-radius: 0.5rem;
  object-fit: cover;
`;
