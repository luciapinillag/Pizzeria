import React from 'react';

function Cardpizza({ img, name, price, ingredients }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={name} /> 
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ingredients.join(', ')}</p> 
                <p className="card-text"><strong>Precio: ${price}</strong></p>
                <a href="#" className="btn btn-primary">Ver más 👀</a>
                <a href="#" className="btn btn-dark">Añadir 🛒</a>
            </div>
        </div>
    );
}

export default Cardpizza;
