/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

import { SIGNUP_LABEL } from '../../assets/constants/constants';

import { postSignup } from '../../apis/postSignup';

const initialSignUpState = {
  authenticationId: '',
  password: '',
  nickname: '',
  phone: '',
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
    case '닉네임':
      return {
        ...state,
        nickname: action.value,
      };
    case '전화번호':
      return {
        ...state,
        phone: action.value,
      };
  }
};

const Signup = (props) => {
  const { setUserId } = props;

  const navigate = useNavigate();
  const [inputVal, dispatch] = useReducer(reducerFn, initialSignUpState);

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const onClickBack = () => {
    navigate(-1);
  };

  const submitSignup = async () => {
    try {
      const response = await postSignup(inputVal);
      const memberId = response.headers.location;
      setUserId(memberId);

      alert('🥳 회원가입이 성공적으로 완료되었습니다! 🥳');
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return (
    <LoginSignupWrapper title="SIGN UP">
      {SIGNUP_LABEL.map((label, idx) => (
        <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler}>
          {label.detailExist && <InputDetail>{label.detail}</InputDetail>}
        </Input>
      ))}
      <ButtonWrapper>
        <Button content="SIGN UP" $buttonColor="blue" onClick={submitSignup} />
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
