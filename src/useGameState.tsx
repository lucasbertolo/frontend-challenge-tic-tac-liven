/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";
import { Board, Player } from "./types.d";

const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>("X");
  const [currentBoard, setCurrentBoard] = useState<Board>(Array(9).fill(null));
  const [lastGameInitialPlayer, setLastGameInitialPlayer] =
    useState<Player>("X");

  const choosePlayer = (currentPlayer: Player) =>
    currentPlayer === "X" ? "O" : "X";

  const computeMove = (squareId: number) => {
    setCurrentBoard((board) => {
      const updatedBoard = [...board];

      updatedBoard[squareId] = nextPlayer;

      return updatedBoard;
    });

    setNextPlayer(choosePlayer);
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  };

  const restartGame = () => {
    const player = choosePlayer(lastGameInitialPlayer);

    setNextPlayer(player);
    setLastGameInitialPlayer(player);

    setStepNumber(0);
    setCurrentBoard(Array(9).fill(null));
  };

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    restartGame
  };
};

export default useGameState;
