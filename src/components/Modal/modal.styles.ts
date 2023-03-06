import styled, { css } from "styled-components";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  max-width: 100%;
  position: relative;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;
