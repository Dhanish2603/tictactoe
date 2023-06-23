import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function squareClick(index) {
    if (calculateWinner(square) || square[index]) {
      return;
    }

    const nextSquares = square.slice();
    if (isX) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setsquare(nextSquares);
    setIsX(!isX);
  }

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "X" : "O");
  }

  const resetHandler = () => {
    setsquare(Array(9).fill(null));
    setIsX(true)
  };

  return (<>
      <h1>Tic Tac Toe</h1>
    <div className="App">
      <h1 className="status">{status}</h1>
      <div className="row">
        <Square value={square[0]} onSquareClick={() => squareClick(0)} />
        <Square value={square[1]} onSquareClick={() => squareClick(1)} />
        <Square value={square[2]} onSquareClick={() => squareClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={() => squareClick(3)} />
        <Square value={square[4]} onSquareClick={() => squareClick(4)} />
        <Square value={square[5]} onSquareClick={() => squareClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={() => squareClick(6)} />
        <Square value={square[7]} onSquareClick={() => squareClick(7)} />
        <Square value={square[8]} onSquareClick={() => squareClick(8)} />
      </div>
      <button className="reset" onClick={resetHandler}>Play Again</button>
    </div>
    </>
  );
}

export default App;
