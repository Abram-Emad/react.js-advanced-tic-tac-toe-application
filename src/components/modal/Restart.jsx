import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";

const Restart = () => {
  const { hideModal } = useContext(ModalContext);
  const { handleReset } = useContext(GameContext);

  return (
    <div className='restart'>
      <h3 className='restart-title'>Restart Game?</h3>
      <div className='restart-btns'>
        <button className='btn btn-sm' onClick={hideModal}>
          no, cancal
        </button>
        <button className='btn btn-yellow btn-sm' onClick={handleReset}>
          yes, restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
