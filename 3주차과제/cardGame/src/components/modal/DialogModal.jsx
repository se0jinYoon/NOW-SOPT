/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const DialogModal = ({ gameLevel, matchedCards, resetGame }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (gameLevel === matchedCards.length) {
      dialogRef.current.showModal();
    }
  }, [gameLevel, matchedCards.length]);

  const onClickModalClose = () => {
    dialogRef.current.close();
    resetGame(gameLevel);
  };

  return (
    <ModalContainer ref={dialogRef}>
      <ModalWrapper>
        <ModalHeader>
          <ModalCloseBtn onClick={onClickModalClose}>X</ModalCloseBtn>
        </ModalHeader>
        <ModalText>👾 GAME CLEAR 👾</ModalText>
        <ModalImg src="/src/assets/gif/modalCongrats.gif" loop="infinite" />
        <form method="dialog">
          <RetryBtn onClick={onClickModalClose}>RETRY</RetryBtn>
        </form>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default DialogModal;

const ModalContainer = styled.dialog`
  position: absolute;
  top: 13rem;
  left: 27rem;
  width: 39rem;
  height: 28rem;

  padding: 0.1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  background-color: ${({ theme }) => theme.colors.gray};

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.modalGray};
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.3rem;

  width: 39rem;
  height: 28rem;
`;

const ModalHeader = styled.header`
  position: relative;

  width: 100%;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;

const ModalCloseBtn = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;

  text-align: center;

  width: 1.5rem;
  height: 1.5rem;

  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.black};

  font-size: 1.5rem;

  cursor: pointer;
`;

const ModalText = styled.h1`
  font-size: 2.3rem;
`;

const ModalImg = styled.img`
  width: 78%;
  height: 16rem;
`;

const RetryBtn = styled.button`
  padding: 0 0.3rem;
  border: 4px double ${({ theme }) => theme.colors.black};

  font-size: 1.5rem;

  cursor: pointer;
`;
