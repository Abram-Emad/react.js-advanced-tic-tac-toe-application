import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);

  return (
    <div className='score'>
      {winner && winner !== "no" ? (
        <>
          <p>yoy win</p>
          <h3
            className={`score-title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}>
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className='score-title text-yellow'>No Winner !</h3>
      )}
      <div className='score-btns'>
        <button className='btn btn-sm' onClick={handleReset}>
          Quit
        </button>
        <button
          className={`btn   btn-sm ${
            winner === "x" ? "btn-yellow" : "btn-blue"
          }`}
          onClick={handleNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;
