import React from "react";
import "./Modal.css";

export default function Modal({ modalState, SetModalState }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>회원이 되신 것을 환영합니다!</h2>
        <button onClick={() => SetModalState(!modalState)}>닫기</button>
      </div>
    </div>
  );
}
