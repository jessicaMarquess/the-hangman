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
          <span> Agora, você pode clicar logo abaixo:</span>
          <br/>
          <a href="https://www.youtube.com/watch?v=FLPz-5SsCnM" target="_blank" rel="noreferrer">Clica em mim 🙃</a>
          <span><br/> ou você pode ...</span>
         </>
        ) : (
          <span>Você perdeu! 🫥 <br/> Pode tentar de novo????</span>
        )}
        </p>
        <button onClick={restartGame}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Modal;