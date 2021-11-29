/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = "X" | "O";

const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>("X");
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  const computeMove = (squareId: number) => {
    setCurrentBoard((board) => {
      const updatedBoard = [...board];

      updatedBoard[squareId] = nextPlayer;

      return updatedBoard;
    });
    
    setNextPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  
  };

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove
  };
};

export default useGameState;
