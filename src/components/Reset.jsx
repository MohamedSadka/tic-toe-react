import GameState from "./GameState"

const Reset = ({gameState, onReset}) => {
    if (gameState === GameState.inProgress) {
        return;
    }
  return (
    <button onClick={onReset}  className="reset-button">play again</button>
  )
}

export default Reset