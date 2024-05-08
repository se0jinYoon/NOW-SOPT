/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';

const Button = (props) => {
  const { content } = props;
  return <ButtonWrapper {...props}>{content}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0.8rem;
  border-radius: 0.3rem;
  cursor: pointer;

  ${({
    theme,
    width = 'auto',
    height = 'auto',
    buttonColor = 'skyblue',
    hasBorder = false,
    borderColor = 'white',
    fontColor = 'white',
    fontSize = '1.2rem',
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${theme.colors[buttonColor]};
    border: ${hasBorder ? `1px solid ${theme.colors[borderColor]}` : 'none'};
    color: ${theme.colors[fontColor]};
    font-size: ${fontSize};
  `}
`;
