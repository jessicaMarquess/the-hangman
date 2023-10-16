import React from "react";
import "./Modal.css";

const Modal = ({ isWinner, restartGame }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="game-over">{isWinner ? (
         <>
          <span id='title'>Você venceu! 🎉</span>
          <br/>
          <span><br/> Quer ir mais uma vez?</span>
         </>
        ) : (
         <> 
          <span>Você perdeu! 🫥 <br/> Pode tentar de novo????</span>
          <img className='gif' src='images/game-over.gif' alt="game-over"/>
         </>
        )}
        </p>
        <button onClick={restartGame}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Modal;
