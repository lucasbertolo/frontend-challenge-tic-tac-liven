import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("testing tic tac game", () => {
  it("renders game headings", () => {
    const { getByText } = render(<Game />);
    getByText("TIC-TAC-LIVEN");
  });

  it("renders board and check for step counter update", () => {
    const { getByText, getByTestId } = render(<Game />);

    // Expect "Current step: 0" to be found
    getByText("Current step: 0");

    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    // Expect "Current step: 1" to be found
    getByText("Current step: 1");
  });

  it("expects 'X' to be the winner", () => {
    const { getByText, getByTestId } = render(<Game />);

    // Simulating the game with 'X' as the winner

    const square0 = getByTestId(`square-0`);
    const square4 = getByTestId(`square-4`);
    const square8 = getByTestId(`square-8`);
    const square1 = getByTestId(`square-1`);
    const square2 = getByTestId(`square-2`);

    // X clicks on the upper left corner
    fireEvent.click(square0);

    // O on the center upper row
    fireEvent.click(square1);

    // X on the center
    fireEvent.click(square4);

    // O on the upper right corner
    fireEvent.click(square2);

    // X on the bottom right corner
    fireEvent.click(square8);

    // The game would be displayed like this

    //  X | O | O
    //    | X |
    //    |   | X

    // Expect "Current step: 1" to be found
    getByText("Winner: X");
  });

  it("expects 'O' to be the winner", () => {
    const { getByText, getByTestId } = render(<Game />);

    // Simulating the game with 'X' as the winner

    const square0 = getByTestId(`square-0`);
    const square1 = getByTestId(`square-1`);
    const square2 = getByTestId(`square-2`);
    const square3 = getByTestId(`square-3`);
    const square5 = getByTestId(`square-5`);
    const square6 = getByTestId(`square-6`);

    // X clicks on the center left
    fireEvent.click(square3);

    // O on the upper left corner
    fireEvent.click(square0);

    // X on the center right
    fireEvent.click(square5);

    // O on the upper center
    fireEvent.click(square1);

    // X on the bottom left corner
    fireEvent.click(square6);

    // O on the upper right corner
    fireEvent.click(square2);

    // The game would be displayed like this

    //  O | O | O
    //  X |   | X
    //  X |   |

    // Expect "Winner: O" to be found
    getByText("Winner: O");
  });

  it("expects a draw", () => {
    const { getByText, getByTestId } = render(<Game />);

    // Simulating the game with 'X' as the winner

    const square0 = getByTestId(`square-0`);
    const square1 = getByTestId(`square-1`);
    const square2 = getByTestId(`square-2`);
    const square3 = getByTestId(`square-3`);
    const square4 = getByTestId(`square-4`);
    const square5 = getByTestId(`square-5`);
    const square6 = getByTestId(`square-6`);
    const square7 = getByTestId(`square-7`);
    const square8 = getByTestId(`square-8`);

    // X clicks on the center left
    fireEvent.click(square3);

    // O on the upper left corner
    fireEvent.click(square0);

    // X on the center right
    fireEvent.click(square5);

    // O on the upper right corner
    fireEvent.click(square2);

    // X on the bottom left corner
    fireEvent.click(square6);

    // O on the bottom center
    fireEvent.click(square7);

    // X on the upper center
    fireEvent.click(square1);

    // O on the center
    fireEvent.click(square4);

    // X on the bottom right corner
    fireEvent.click(square8);

    // The game would be displayed like this

    //  O | X | O
    //  X | O | X
    //  X | O | X

    // Expect "Draw: Game over" to be found
    getByText("Draw: Game over");
  });

  it("should not update board when clicked in a checked box", () => {
    const { getByText, getByTestId } = render(<Game />);

    const square0 = getByTestId(`square-0`);

    fireEvent.click(square0);

    // Expect "Current step: 1" to be found
    getByText("Current step: 1");

    fireEvent.click(square0);

    // Expect "Current step: 1" to be found
    getByText("Current step: 1");
  });
});
