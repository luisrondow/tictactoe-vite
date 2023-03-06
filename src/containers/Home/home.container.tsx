import { useContext, useState } from "react";
import { Board } from "../../components/Board";
import useGame from "../../hooks/useGame";
import * as Style from "./home.styles";
import { PlayerContext } from "../../contexts/player/player.context";

import ScoreboardModal from "../../components/ScoreboardModal";
import ChooseTagModal from "../../components/ChooseTagModal";

const Home = () => {
  const { board, onTagClick, resetGame } = useGame();
  const { player } = useContext(PlayerContext);

  const [isScoreboardModalOpen, setIsScoreboardModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(
    () => !Boolean(player?.tag)
  );

  return (
    <>
      <Style.Container>
        <Style.Title>Jogo do Galo</Style.Title>
        <Board board={board} onClick={onTagClick} />
        <Style.ActionsWrapper>
          <Style.ActionButton onClick={resetGame}>Novo Jogo</Style.ActionButton>
          <Style.ActionButton onClick={() => setIsScoreboardModalOpen(true)}>
            Abrir placar
          </Style.ActionButton>
        </Style.ActionsWrapper>
      </Style.Container>
      <ScoreboardModal
        isOpen={isScoreboardModalOpen}
        onClose={() => setIsScoreboardModalOpen(false)}
      />
      <ChooseTagModal
        isOpen={isTagModalOpen}
        onClose={() => setIsTagModalOpen(false)}
      />
    </>
  );
};

export default Home;
