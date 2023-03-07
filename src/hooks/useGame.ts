import { useEffect, useState, useContext } from "react";
import { WINNING_COMBINATIONS } from "../utils/constants";
import { ScoreboardContext } from "../contexts/scoreboard/scoreboard.context";

type Board = Array<number>;

const useGame = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(0));
  const [turn, setTurn] = useState<number>(1);
  const [winner, setWinner] = useState<number>(0);

  const { actions } = useContext(ScoreboardContext);

  const processCpuTurn = (): void => {
    if (winner !== 0) return;

    const newBoard = [...board];
    const emptyIndexes = newBoard
      .map((value, index) => (value === 0 ? index : null))
      .filter((value) => value !== null) as number[];

    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    newBoard.splice(emptyIndexes[randomIndex], 1, 2);

    setBoard(newBoard);
    setTurn(1);
  };

  const onTagClick = (index: number): void => {
    if (board[index] !== 0 || turn !== 1 || winner !== 0) return;

    const newBoard = [...board];
    newBoard.splice(index, 1, 1);
    setBoard(newBoard);

    setTurn(2);
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(0));
    setTurn(1);
    setWinner(0);
  };

  // Helper functions

  const handleWinner = (player: 1 | 2): void => {
    actions?.updateScoreboard(player);
    setWinner(player);
    alert(`${player === 1 ? "Player" : "CPU"} wins!`);
  };

  const checkDraw = (): boolean => {
    return board.filter((value) => value === 0).length === 0;
  };

  const checkWin = (player: number): boolean => {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return board[index] === player;
      });
    });
  };

  useEffect(() => {
    if (board.filter((value) => value !== 0).length >= 5) {
      if (checkWin(1)) {
        handleWinner(1);
      } else if (checkWin(2)) {
        handleWinner(2);
      } else if (checkDraw()) {
        alert("Draw!");
        actions?.updateScoreboard("draw");
      } else if (turn === 2) {
        setTimeout(() => {
          processCpuTurn();
        }, 500);
      }
    } else {
      if (turn === 2) {
        setTimeout(() => {
          processCpuTurn();
        }, 500);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  return { board, turn, onTagClick, resetGame };
};

export default useGame;
