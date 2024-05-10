/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';
import LoginSignupWrapper from '../../commons/LoginSignupWrapper';

import { LOGIN_LABEL } from '../../assets/constants/constants';

import { postLogin } from '../../apis/postLogin';

const initialLoginState = {
  authenticationId: '',
  password: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'ID':
      return {
        ...state,
        authenticationId: action.value,
      };
    case 'PW':
      return {
        ...state,
        password: action.value,
      };
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [inputVal, dispatch] = useReducer(reducerFn, initialLoginState);

  const onClickSignup = () => {
    navigate('/signUp');
  };

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const submitLogin = async () => {
    try {
      const response = await postLogin(inputVal);
      const userId = response.headers.location;

      navigate(`/mypage/${userId}`);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          alert(error.response.data.message);
        } else if (status === 404) {
          alert(error.response.data.message);
        } else if (status === 401) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return (
    <LoginSignupWrapper title="LOGIN">
      <LoginImg src="./src/assets/img/loginImg.jpeg" alt="로그인 이미지" />
      {LOGIN_LABEL.map((label, idx) => (
        <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler} />
      ))}
      <ButtonWrapper>
        <Button content="LOGIN" $buttonColor="blue" onClick={submitLogin}></Button>
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
