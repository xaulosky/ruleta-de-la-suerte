import React from 'react';

const Modal = ({ showModal, setShowModal, ganador }) => {
    if (!showModal) return null;
    console.log(ganador)
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Felicitaciones!</h2>
                <p>Has ganado!</p>
                <button onClick={() => setShowModal(false)}>Cerrar</button>
            </div>
        </div>
    );
}

export default Modal;
