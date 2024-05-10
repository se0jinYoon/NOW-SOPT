import styled from 'styled-components';
import { useEffect, useState, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

import { getUserInfo } from '../../apis/getUserInfo';
import { patchChangePw } from '../../apis/patchChangePw';

import { MYPAGE_LABEL, CHANGE_PW_LABEL } from '../../assets/constants/constants';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialPwState = {
  previousPassword: '',
  newPassword: '',
  newPasswordVerification: '',
  inputVoidErrorMessage: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case '기존 비밀번호':
      return {
        ...state,
        previousPassword: action.value,
      };
    case '새로운 비밀번호':
      return {
        ...state,
        newPassword: action.value,
      };
    case '비밀번호 확인':
      return {
        ...state,
        newPasswordVerification: action.value,
      };
    case 'inputVoidError':
      return { ...state, inputVoidErrorMessage: action.value };
  }
};

const MyPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userInfo, setUserInfo] = useState({
    authenticationId: '',
    nickname: '',
    phone: '',
  });
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [inputVal, dispatch] = useReducer(reducerFn, initialPwState);

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const submitChangePw = async () => {
    // eslint-disable-next-line no-unused-vars
    const { inputVoidErrorMessage, ...requestBody } = inputVal;
    try {
      const response = await patchChangePw(requestBody, userId);
      console.log(response);
      alert(`✨ ${response.data.message}✨`);
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          alert(error.response.data.message);
        } else if (status === 403) {
          alert(error.response.data.message);
        }
      }
    }
  };

  const onClickValid = () => {
    console.log(inputVal);
    if (inputVal.previousPassword.trim().length === 0) {
      dispatch({ type: 'inputVoidError', value: '기존 비밀번호가 입력되지 않았습니다.' });
      // alert(inputVal.inputVoidErrorMessage);
    } else if (inputVal.newPassword.trim().length === 0) {
      dispatch({ type: 'inputVoidError', value: '새로운 비밀번호가 입력되지 않았습니다.' });
      // alert(inputVal.inputVoidErrorMessage);
    } else if (inputVal.newPasswordVerification.trim().length === 0) {
      dispatch({ type: 'inputVoidError', value: '비밀번호 확인이 입력되지 않았습니다.' });
    } else {
      submitChangePw();
    }
  };

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

  useEffect(() => {
    inputVal.inputVoidErrorMessage !== '' && alert(inputVal.inputVoidErrorMessage);
  }, [inputVal.inputVoidErrorMessage]);

  const onClickHome = () => {
    navigate('/', { state: { userId } });
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <LoginSignupWrapper title="MY PAGE">
      {MYPAGE_LABEL.map((label, idx) => (
        <UserInfoWrapper key={label + idx.toString()}>
          <UserInfoLabel>{label.label}</UserInfoLabel>
          <UserInfoContent>{userInfo[label.content]}</UserInfoContent>
        </UserInfoWrapper>
      ))}

      <Button
        content="홈으로"
        $buttonColor="lightPink"
        $hoverColor="lightPink"
        $fontColor="black"
        $hoverFontColor="black"
        onClick={onClickHome}
      />
      <ToggleTitleWrapper onClick={onClickToggle}>
        <ToggleTitle>비밀번호 변경</ToggleTitle>
        {isToggleOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </ToggleTitleWrapper>
      <ToggleWrapper $isOpen={isToggleOpen}>
        {CHANGE_PW_LABEL.map((label, idx) => (
          <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler} />
        ))}
        <Button content="비밀번호 변경" $buttonColor="blue" $marginTop="3rem" onClick={onClickValid} />
      </ToggleWrapper>
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

const ToggleTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

const ToggleTitle = styled.h2`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ToggleWrapper = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
