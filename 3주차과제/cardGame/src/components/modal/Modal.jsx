/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

import useClickOutside from '../../hooks/useClickOutside';

const Modal = ({ gameLevel, matchedCards, resetGame }) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(gameLevel === matchedCards.length);
  }, [gameLevel, matchedCards.length]);

  const onClickModalClose = () => {
    setShowModal(false);
    resetGame(gameLevel);
  };

  const onClickModalOutside = () => {
    showModal && onClickModalClose();
  };

  useClickOutside(modalRef, onClickModalOutside);

  return (
    <ModalBackground $showModal={showModal}>
      <ModalWrapper ref={modalRef}>
        <ModalHeader>
          <ModalCloseBtn onClick={onClickModalClose}>X</ModalCloseBtn>
        </ModalHeader>
        <ModalText>👾 GAME CLEAR 👾</ModalText>
        <ModalImg src="/src/assets/gif/modalCongrats.gif" loop="infinite" />
        <RetryBtn onClick={onClickModalClose}>RETRY</RetryBtn>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  display: ${({ $showModal }) => ($showModal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.modalGray};
`;

const ModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.3rem;

  width: 39rem;
  height: 28rem;

  padding: 0.1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  background-color: ${({ theme }) => theme.colors.gray};
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
