import { useContext } from "react";
import { PlayerContext } from "../../contexts/player/player.context";
import Modal from "../Modal";
import { Tag } from "../../contexts/player/player.types";
import { ChooseTagModalProps } from "./choose-tag-modal.types";

import { Wrapper, Title, TagButton } from "./choose-tag-modal.styles";

const ChooseTagModal = (props: ChooseTagModalProps) => {
  const { isOpen, onClose } = props;

  const { actions } = useContext(PlayerContext);

  const handleChooseTag = (tag: Tag) => {
    onClose();
    actions?.updatePlayerTag(tag);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => handleChooseTag("cross")}
      title="Escolha o seu símbolo"
    >
      <Wrapper>
        <Title>Quero ser: </Title>
        <TagButton onClick={() => handleChooseTag("cross")}>X</TagButton>
        <TagButton onClick={() => handleChooseTag("circle")}>O</TagButton>
      </Wrapper>
    </Modal>
  );
};

export default ChooseTagModal;
