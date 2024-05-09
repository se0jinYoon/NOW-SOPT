/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Input = (props) => {
  const { label, children } = props;
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  width: 25rem;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.2rem;
  font-weight: bolder;
`;

const StyledInput = styled.input`
  width: 17rem;

  padding: 0.5rem 0.7rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};

  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.font.fontFamily};
`;
