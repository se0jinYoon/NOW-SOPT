import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

const Signup = () => {
  return (
    <LoginSignupWrapper title="SIGN UP">
      <Input label="ID" />
      <Input label="PW" />
      <Input label="닉네임" />
      <Input label="전화번호" />
      <ButtonWrapper>
        <Button content="SIGN UP" buttonColor="blue" hoverColor=""/>
        <Button content="뒤로가기" buttonColor="blue" />
      </ButtonWrapper>
    </LoginSignupWrapper>
  );
};

export default Signup;
