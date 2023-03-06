import { useContext } from "react";
import {
  Scoreboard,
  Score,
  ScoreTitle,
  ScoreValue,
} from "./scoreboard-modal.styles";
import { ScoreboardContext } from "../../contexts/scoreboard/scoreboard.context";
import Modal from "../Modal";
import { ScoreboardModalProps } from "./scoreboard-modal.types";

const ScoreboardModal = (props: ScoreboardModalProps) => {
  const { isOpen, onClose } = props;

  const { scoreboard } = useContext(ScoreboardContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Placar">
      <Scoreboard>
        <Score>
          <ScoreTitle>Jogador</ScoreTitle>
          <ScoreValue>{scoreboard?.[1]}</ScoreValue>
        </Score>
        <Score>
          <ScoreTitle>CPU</ScoreTitle>
          <ScoreValue>{scoreboard?.[2]}</ScoreValue>
        </Score>
      </Scoreboard>
    </Modal>
  );
};

export default ScoreboardModal;
