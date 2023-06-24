import { useState } from "react";
import Board from "./board";
import { calculateWinner } from "./calculateWinner";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)

  
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return
    }
    
    squares[index] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  const winner = calculateWinner(squares)
  let status
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }


  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  return (
    <div className="boardContainer">
      <div className="boardRow">
        <Board value={squares[0]} onClick={() => handleClick(0)} />
        <Board value={squares[1]} onClick={() => handleClick(1)} />
        <Board value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="boardRow">
        <Board value={squares[3]} onClick={() => handleClick(3)} />
        <Board value={squares[4]} onClick={() => handleClick(4)} />
        <Board value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="boardRow">
        <Board value={squares[6]} onClick={() => handleClick(6)} />
        <Board value={squares[7]} onClick={() => handleClick(7)} />
        <Board value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>Restart Game!</button>
    </div>
  )
}
