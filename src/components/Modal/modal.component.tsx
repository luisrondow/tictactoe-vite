import { ModalProps } from "./modal.types";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "./modal.styles";

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, children } = props;

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
