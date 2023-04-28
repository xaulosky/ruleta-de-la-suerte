import React from 'react';

const Premio = ({ premio }) => {
    return (
        <div className="premio">
            <img src={premio.imagen} alt={premio.nombre} />
            <p>{premio.nombre}</p>
        </div>
    );
}

export default Premio;
