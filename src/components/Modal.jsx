import React from 'react';
import 'animate.css';

const Modal = ({ showModal, setShowModal, ganador }) => {
    if (!showModal) return null;
    console.log(ganador)
    return (
        <div className="modal  animate__animated animate__fadeIn">
            <div className="modal-content">
                <h1 style={{
                    marginBottom: '0px !important',
                }}>¡FELICITACIONES!</h1>
                <p>¡GANASTE!</p>
                <p>TU PREMIO ES:</p>
                <p style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',

                }}>{ganador.option}</p>
                
                <button onClick={() => setShowModal(false)}
                    style={{
                        backgroundColor: '#dd5114',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginTop: '20px'

                    }
                    }
                >Cerrar</button>
            </div>
        </div >
    );
}

export default Modal;