export type Square = {
  id: number;
  value: string | null;
  onClick: () => void;
};

export type BoardWrapper = {
  squares: Board;
  onSquareClick: (id: number) => void;
};

type Player = "X" | "O";

export type Board = (null | Player)[];
