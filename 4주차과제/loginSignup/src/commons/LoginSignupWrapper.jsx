/* eslint-disable react/prop-types */
import styled from 'styled-components';

const LoginSignupWrapper = (props) => {
  const { title, children } = props;
  return (
    <LoginSignupWrp>
      <Title>{title}</Title>
      {children}
    </LoginSignupWrp>
  );
};

export default LoginSignupWrapper;

const LoginSignupWrp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 35rem;

  padding: 1rem 3rem;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightSkyblue};
`;

const Title = styled.h1`
  font-size: 1.3rem;
`;
